// question from reducer state
import { question } from '../reducer';

describe('Question reducer (question itself)', () => {
  it('should add new questions', () => {
    const state = [{ question_id: 'toto' }, { question_id: 'coco' }];
    const newQuestion = { question_id: 'baz' };
    const newState = question(state, {
      type: 'FETCHED_QUESTION',
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
