import express from 'express';
import yields from 'express-yields';
import fs from 'fs-extra';
import webpack from 'webpack';
import { argv } from 'optimist';
import { get } from 'request-promise';
import { delay } from 'redux-saga';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnecteRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import path from 'path';
import App from '../src/App';
import getStore from '../src/getStore';
import { questions, question } from '../data/api-real-url';

const app = express();

const useLiveData = argv.useLiveData === 'true';
const useServerRender = argv.ServerRender === 'true';

function* getQuestions() {
  let data;
  if (useLiveData) {
    data = yield get(questions, { gzip: true });
  } else {
    data = yield fs.readFile('./data/mock-questions.json', 'utf-8');
  }

  return JSON.parse(data);
}

function* getQuestion(question_id) {
  let data;
  if (useLiveData) {
    data = yield get(question(question_id), { gzip: true, json: true });
  } else {
    const questions = yield getQuestions();
    const question = questions.items.find(
      _question => _question.question_id === question_id
    );
    question.body = `Mock question body: ${question_id}`;
    data = { items: [question] };
  }

  return data;
}

app.get('/api/questions', function*(req, res) {
  const data = yield getQuestions();
  // Small delay - async/hot-reloading aspects
  // Strongly to remove for production.
  yield delay(150);
  res.json(data);
});

app.get('/api/questions/:id', function*(req, res) {
  const data = yield getQuestion(req.params.id);
  // Remove this delay for production.
  yield delay(150);
  res.json(data);
});

if (process.env.NODE_ENV === 'development') {
  // Import statement
  const config = require('../config/webpack/webpack.config.dev.babel').default;
  const compiler = webpack(config);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true
    })
  );

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

app.get(['/', 'questions/:id'], function*(req, res) {
  let index = yield fs.readFile('./public/index.html', 'utf-8');

  const history = createHistory({
    initialEntries: [req.path]
  });

  const initialState = {
    questions: []
  };

  // simple for two routes
  if (req.params.id) {
    const question_id = req.params.id;
    const response = yield getQuestion(question_id);
    const questionDetails = response.items[0];
    initialState.questions = [{ ...questionDetails, question_id }];
  } else {
    const questions = yield getQuestions();
    initialState.questions = [...questions.items];
  }

  const store = getStore(history, initialState);

  if (useServerRender) {
    const appRendered = renderToString(
      <Provider store={store}>
        <ConnecteRoute history={history}>
          <App />
        </ConnecteRoute>
      </Provider>
    );
    index = index.replace(`<%= preloadedApplication %>`, appRendered);
  } else {
    index = index.replace(
      `<%= preloadedApplication %>`,
      `Please wait while we load the application.`
    );
  }

  res.send(index);
});

export default app;
