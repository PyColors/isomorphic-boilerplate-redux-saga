import express from 'express';
import yields from 'express-yields';
import fs from 'fs-extra';
import webpack from 'webpack';
import { argv } from 'optimist';
import { get } from 'request-promise';
import { questions, question } from '../data/api-real-url';
import { delay } from 'redux-saga';

const port = process.env.PORT || 3000;
const app = express();

const useLiveData = argv.useLiveData === "true";

function * getQuestion() {
    let data;
    if (useLiveData) {
        data = yield get (questions, {gzip: true});
    } else {
        data = yield fs.readFile('./data/mock-questions.json', "utf-8");
    }

    return JSON.parse(data);
}

app.get('/api/questions', function * (req, res) {
    const data = yield getQuestion();
    yield delay(150);
    res.json(data);
});

if (process.env.NODE_ENV === 'development') {
    // Import statement
    const config = require('../webpack.config.dev.babel').default;
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.get(['/'], function * (req, res) {
    let index = yield fs.readFile('./public/index.html', "utf-8");
    res.send(index);
});

app.listen(port, '0.0.0.0', () => console.info(`App listening on ${port}`));
