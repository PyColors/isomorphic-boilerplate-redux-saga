/**
 * Saga allows us to make application side effects (i.e. asynchronous things like data fetching
 * and impure things like accessing the browser cache).
 * Great to manage, more efficient to execute, easy to test, and better at handling failures.
 */

import { put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

/**
 * Get the data from questions collection
 * and save under const
 */
export default function*() {
  yield take('REQUEST_FETCH_QUESTIONS');

  const raw = yield fetch('/api/questions');
  const json = yield raw.json();
  const questions = json.items;

  console.log('coco questions', questions);
  yield put({ type: 'FETCHED_QUESTIONS', questions });
}
