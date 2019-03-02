import React from 'react';
import { connect } from 'react-redux';

import { Route, Link } from 'react-router-dom';
import QuestionList from './pages/QuestionListPage';
import QuestionDetail from './pages/QuestionDetailPage';

import NotificationsViewer from './components/molecules/NotificationsViewer';

const AppDisplay = () => (
  <div>
    <div>
      <Link to="/">
        <h1>
          {' '}
          <span role="img" aria-label="party">
            🎉
          </span>{' '}
          Isomorphic React App Boilerplate
        </h1>
      </Link>
    </div>

    <div>
      <NotificationsViewer />
    </div>

    <div>
      <Route exact path="/" render={() => <QuestionList />} />
      <Route
        exact
        path="/questions/:id"
        render={({ match }) => <QuestionDetail question_id={match.params.id} />}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(AppDisplay);
