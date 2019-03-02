import renderer from 'react-test-renderer';
import React from 'react';
import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetailPage';

describe('The Question Detail <Component', () => {
  describe('The Container Element', () => {
    /**
     * As Map State to Props is a pure function, it's lovely test it 😎
     * without without adding libraries.
     */
    describe('mapStateToProps', () => {
      it('should map the state to props correctly', () => {
        const sampleQuestion = {
          question_id: 42,
          body: 'Lorem Ipsum'
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });

  describe('The display element', () => {
    it('Should not regress', () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="Lorem Ipsum"
          body="42"
          answerCount={0}
          tags={['react']}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
