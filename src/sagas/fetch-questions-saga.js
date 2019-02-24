import { put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

export default function* () {
    yield take('REQUEST_FETCH_QUESTIONS');
    const raw = yield fetch('/api/questions');
    const json = yield raw.json();
    const questions = json.items;
    console.log('coco questions', questions);
    yield put({ type: 'FETCHED_QUESTIONS', questions });
}
