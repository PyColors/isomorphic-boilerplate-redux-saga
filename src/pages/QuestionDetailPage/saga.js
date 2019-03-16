import { takeEvery, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as actions from './constants';

// Fetch question details from local proxy API
export function* handleFetchQuestion({ question_id }) {
  const raw = yield fetch(`/api/questions/${question_id}`);
  const json = yield raw.json();
  const question = json.items[0];

  // Question has been fetched
  yield put({
    type: actions.FETCHED_QUESTION,
    question
  });
}

export default function*() {
  yield takeEvery(actions.REQUEST_FETCH_QUESTION, handleFetchQuestion);
}
