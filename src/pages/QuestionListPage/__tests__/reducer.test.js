import { questions } from '../reducer';

describe('Questions reducer (list of questions)', () => {
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
});
