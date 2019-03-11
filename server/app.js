import express from 'express';
import yields from 'express-yields';
import fs from 'fs-extra';
import { argv } from 'optimist';
import { get } from 'request-promise';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnecteRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import path from 'path';
import App from '../src/App';
import { questionsRoutes } from './routes/questionsRoutes';
import { getQuestions, getQuestion } from './isomorphic';
import getStore from '../src/getStore';
import {
  devMiddleware,
  hotMiddleware
} from './middlewares/hotModuleReplacement';

const app = express();

// const useLiveData = argv.useLiveData === 'true';
const useServerRender = argv.ServerRender === 'true';

// Questions routes
questionsRoutes(app);

if (process.env.NODE_ENV === 'development') {
  // Hot Module Replacement from middleware
  app.use(devMiddleware);
  app.use(hotMiddleware);
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
