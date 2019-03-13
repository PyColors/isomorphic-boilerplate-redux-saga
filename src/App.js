import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Link } from 'react-router-dom';
import QuestionList from './pages/QuestionListPage';
import QuestionDetail from './pages/QuestionDetailPage';
import NotFound from './pages/NotFound/NotFound';

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
      <Switch>
        <Route exact path="/" render={() => <QuestionList />} />
        <Route
          exact
          path="/questions/:id"
          render={({ match }) => (
            <QuestionDetail question_id={match.params.id} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(AppDisplay);
