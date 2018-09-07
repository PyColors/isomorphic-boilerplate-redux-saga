import React from 'react';
import { connect } from 'react-redux';

const AppDisplay = ({test}) => (
    <div>
        <h1>Isomorphic React App {test} </h1>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};

export default connect(mapStateToProps)(AppDisplay);
