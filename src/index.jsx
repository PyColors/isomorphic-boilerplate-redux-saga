import App from './App';
import ReactDom from 'react-dom';
import React from 'react';

const render = (_App) => {
    ReactDom.render(
        <_App />,
        document.getElementById('AppContainer')
    )
};

render(App);