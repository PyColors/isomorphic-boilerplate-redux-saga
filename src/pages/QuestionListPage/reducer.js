/*
 * QuestionsListReducer
 *
 * Reducers control data - actions allow us to change our state
 * by a switch statement in the reducer function below:
 */

import unionWith from 'lodash/unionWith';
// import { FETCHED_QUESTIONS } from './constants';

/**
 * Manage how to render the state of questions
 * @param state - state of the app
 * @param type
 * @param questions
 * @param action
 * @returns Array state
 */
export const questions = (state = [], { type, questions, action }) => {
  const questionEquality = (a = {}, b = {}) => a.question_id === b.question_id;

  switch (type) {
    case 'FETCHED_QUESTIONS':
      return (state = unionWith(state, questions, questionEquality));
    default:
      return state;
  }
};
