// question from reducer state
import { question } from '../reducer';
import * as actions from '../constants';

describe('Question reducer (question itself)', () => {
  it('should add new questions', () => {
    const state = [{ question_id: '81212863' }, { question_id: '45312403' }];
    const newQuestion = { question_id: 'baz' };
    const newState = question(state, {
      type: actions.FETCHED_QUESTION,
      question: newQuestion
    });

    /*
     * newState has newQuestion value, toContain works
     * state does not contain newQuestion at all
     */
    expect(newState).toContain(newQuestion);
    expect(state).not.toContain(newQuestion);
    expect(newState).toHaveLength(3);
  });
});
