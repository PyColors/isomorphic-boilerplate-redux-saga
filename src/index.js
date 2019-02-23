import App from './App';
import ReactDom from 'react-dom';
import React from 'react';
import getStore from './getStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory';
const history = createHistory();

const store =  getStore(history);

const fetchDataForLocation = location => {
    if (location.pathname === "/") {
        store.dispatch({type: `REQUEST_FETCH_QUESTIONS`});
    }

    if (location.pathname.includes(`questions`)) {
        store.dispatch({type:`REQUEST_FETCH_QUESTION`, question_id:location.pathname.split('/')[2]});
    }
};

const render = (_App) => {
    ReactDom.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <_App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('AppContainer')
    )
};

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    })
}

// render(App);

store.subscribe(() => {
    const state = store.getState();
    if (state.questions.length > 0) {
        console.log('coco Server Rendering');
        render(App);
    } else {
        console.log('coco not Server Rendering');
    }
});

fetchDataForLocation(history.location);
history.listen(fetchDataForLocation);
