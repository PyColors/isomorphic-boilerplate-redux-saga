import { delay } from 'redux-saga';
import { getQuestions, getQuestion } from '../isomorphic';

export const questionsRoutes = app => {
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
};
