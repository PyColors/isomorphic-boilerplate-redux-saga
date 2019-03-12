// dynamic import routes
import loadable from 'loadable-components';

export const TagsList = loadable(() =>
  import('./components/molecules/TagsList/TagsList')
);
