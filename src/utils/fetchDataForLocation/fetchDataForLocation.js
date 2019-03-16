/**
 * This file reads the current path and makes a request to get the data
 * appropriate saga to fetch data are required.
 */

// utils
import store from '../store';
import history from '../history';

// Fetch questions from QuestionListPage saga
import { REQUEST_FETCH_QUESTIONS } from '../../pages/QuestionListPage/constants';

// Fetch question from QuestionDetailPage saga
import { REQUEST_FETCH_QUESTION } from '../../pages/QuestionDetailPage/constants';

/**
 * Fetch APIs from URLs
 * @param location - current URL that is loaded
 */
const fetchDataForLocation = location => {
  if (location.pathname === '/') {
    // Fetch questions from QuestionsListPage saga
    store.dispatch({
      type: REQUEST_FETCH_QUESTIONS
    });
  }

  if (location.pathname.includes('questions')) {
    // Fetch questions from QuestionDetailPage saga
    store.dispatch({
      type: REQUEST_FETCH_QUESTION,
      question_id: location.pathname.split('/')[2]
    });
  }
};

// Running history
fetchDataForLocation(history.location);
history.listen(fetchDataForLocation);

export default fetchDataForLocation(history.location);
