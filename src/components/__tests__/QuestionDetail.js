import { mapStateToProps } from '../QuestionDetail'
import renderer from 'react-test-renderer';
import React from 'react';

describe(`The Question Detail <Component`, () => {
    describe(`The Container Element`, () => {
        /**
         * As Map State to Props is a pure function, it's lovely test it 😎
         * without without adding libraries.
         */
        describe(`mapStateToProps`, () => {
            it("should map the state to props correctly", () => {
                const sampleQuestion = {
                    question_id:42,
                    body:"Lorem Ipsum"
                };
                const appState = {
                    questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id:42,
                };
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(sampleQuestion);
            });
        });
    });

    it(`Should not regress`, () => {

    });
});
