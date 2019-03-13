import { getQuestions, getQuestion } from '../isomorphic';

/**
 * Creation of routes and params.id
 * @param app
 */
export const questionsRoutes = app => {
  app.get('/api/questions', function*(req, res) {
    const data = yield getQuestions();

    res.json(data);
  });

  app.get('/api/questions/:id', function*(req, res) {
    const data = yield getQuestion(req.params.id);

    res.json(data);
  });
};
