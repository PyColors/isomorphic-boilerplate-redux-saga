import unionWith from 'lodash/unionWith';

/**
 * Manage how to render the state of questions
 * @param state
 * @param type
 * @param question
 * @returns Array state
 */
export const question = (state = [], { type, question }) => {
  const questionEquality = (a = {}, b = {}) => a.question_id === b.question_id;

  switch (type) {
    case 'FETCHED_QUESTION':
      return (state = unionWith([question], state, questionEquality));
    default:
      return state;
  }
};
