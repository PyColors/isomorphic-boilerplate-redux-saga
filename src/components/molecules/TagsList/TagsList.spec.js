import React from 'react';
import renderer from 'react-test-renderer';
import TagsList from './TagsList';

describe('The tags list', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<TagsList tags={['css', 'html', 'typescript', 'coffeescript']} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
