import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, BrowserRouter} from 'react-router-dom';

import App from '../components/App';
import DevTools from './DevTools';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/">
                    <App />
                </Route>
            </BrowserRouter>
            <DevTools />
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
