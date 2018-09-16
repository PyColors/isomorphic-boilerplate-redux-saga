import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import { Route, Link } from 'react-router-dom';
import NotificationsViewer from './components/NotificationsViewer';

const AppDisplay = () => (
    <div>
        <div>
            <Link to={`/`}>
                <h1>Isomorphic React App</h1>
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

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(AppDisplay);
