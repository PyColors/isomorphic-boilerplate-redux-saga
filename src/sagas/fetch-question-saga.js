import { takeEvery, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

/**
 * Fetch question details from the local proxy API
 */
export function* handleFetchQuestion({ question_id }) {
  const raw = yield fetch(`/api/questions/${question_id}`);
  const json = yield raw.json();
  const question = json.items[0];
  /**
   * Question has been fetched
   */
  yield put({ type: 'FETCHED_QUESTION', question });
}

export default function*() {
  yield takeEvery('REQUEST_FETCH_QUESTION', handleFetchQuestion);
}
