import renderer from 'react-test-renderer';
import React from 'react';
import footer from '../Footer';

describe('The Footer <Component', () => {
  describe('The display element', () => {
    it('Should not regress', () => {
      const tree = renderer.create(<footer />);

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
