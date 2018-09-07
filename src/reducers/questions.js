import unionWith from 'lodash/unionWith';

export const questions = (state = [], {type, question})=>{
    const questionEquality = (a = {}, b = {})=>{
        return a.question_id == b.question_id
    };

    if (type === `FETCHED_QUESTION`) {
        state = unionWith([question],state,questionEquality);
    }

    return state;
};
