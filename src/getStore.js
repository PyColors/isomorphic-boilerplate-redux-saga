import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

// Sagas
import fetchQuestionsSaga from './pages/QuestionListPage/saga';
import fetchQuestionSaga from './pages/QuestionDetailPage/saga';

// Reducers
import * as questions from './pages/QuestionListPage/reducer';
import * as question from './pages/QuestionDetailPage/reducer';

export default function(history, defaultState) {
  const sagaMiddeleware = createSagaMiddleware();
  const middleware = routerMiddleware(history);

  const middlewareChain = [middleware, sagaMiddeleware];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewareChain.push(logger);
  }
  const store = createStore(
    combineReducers({
      ...questions,
      ...question,
      router
    }),
    defaultState,
    applyMiddleware(...middlewareChain)
  );
  // sagas
  sagaMiddeleware.run(fetchQuestionsSaga);
  sagaMiddeleware.run(fetchQuestionSaga);
  return store;
}
