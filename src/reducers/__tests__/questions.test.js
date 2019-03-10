import { questions } from '../questions';

describe('The question reducer', () => {
  it('Should return the same state on an inapplicable action', () => {
    const state = ['foo', 'bar'];
    const stateClone = ['foo', 'bar'];
    const newState = questions(state, { type: 'UNDEFINED_ACTION' });

    /**
     * In this case both toBe and toEqual will return true.
     * However, the real test in this example is toBe, since we want literally the same object both times
     */
    expect(newState).toEqual(stateClone);
    expect(newState).toBe(state);
  });

  it('should add new questions', () => {
    const state = [{ question_id: 'toto' }, { question_id: 'coco' }];
    const newQuestion = { question_id: 'baz' };
    const newState = questions(state, {
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
