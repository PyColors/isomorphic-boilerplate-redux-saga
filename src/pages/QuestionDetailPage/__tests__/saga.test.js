import fetch from 'isomorphic-fetch';
import { handleFetchQuestion } from '../saga';

describe('Fetch questions saga', () => {
  beforeAll(() => {
    fetch.__setValue([{ question_id: 42 }]);
  });
  it('should get the questions from the correct endpoint in response to the appropriate action', async () => {
    const gen = handleFetchQuestion({ question_id: 42 });
    // At this point, isomorphic fetch must have been mocked,
    const { value } = await gen.next();
    expect(value).toEqual([{ question_id: 42 }]);

    expect(fetch).toHaveBeenCalledWith('/api/questions/42');
  });
});
