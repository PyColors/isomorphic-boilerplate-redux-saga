/*
 * Questions List Actions
 *
 * As this Isomorphic boilerplate is using Redux and Redux-saga
 * Actions are the only way to interacts with the state
 *
 */

/**
 * Allow dealing with fetched questions
 * @return {object} - An action object with a type of FETCHED_QUESTIONS
 */
import { FETCHED_QUESTIONS } from './constants';

export function fetchedQuestions() {
  return {
    type: FETCHED_QUESTIONS
  };
}
