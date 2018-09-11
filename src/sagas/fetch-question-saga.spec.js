import { handleFetchQuestion }  from './fetch-question-saga';
import fetch from 'isomorphic-fetch';

describe("Fetch question saga", () => {

    beforeAll(() => {
        fetch.__serValue([{question_id:42}]);
    });

    it("should fetch the questions", async () => {
        const gen = handleFetchQuestion({question_id:42});
        const { value } = await gen.next();
        expect(value).toEqual([{questions:42}]);
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`)
    });
});
