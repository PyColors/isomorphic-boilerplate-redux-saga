import renderer from 'react-test-renderer';
import React from 'react';
import header from '../Header';

describe('The Header <Component', () => {
  describe('The display element', () => {
    it('Should not regress', () => {
      const tree = renderer.create(<header />);

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
