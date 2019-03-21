import { get } from 'request-promise';
import { question, questions } from '../data/api-real-url';
import fs from 'fs-extra';
import config from './config';

export function* getQuestions() {
  let data;
  if (config.useLiveData) {
    data = yield get(questions, { gzip: true });
  } else {
    data = yield fs.readFile('../data/mock-questions.json', 'utf-8');
  }

  return JSON.parse(data);
}

export function* getQuestion(question_id) {
  let data;
  if (config.useLiveData) {
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
