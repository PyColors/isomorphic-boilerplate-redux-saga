import React from 'react';
import { Route, Switch } from 'react-router-dom';

import QuestionList from './pages/QuestionListPage';
import QuestionDetail from './pages/QuestionDetailPage';
import NotFound from './pages/NotFound/NotFound';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <QuestionList />} />
      <Route
        exact
        path="/questions/:id"
        render={({ match }) => <QuestionDetail question_id={match.params.id} />}
      />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
