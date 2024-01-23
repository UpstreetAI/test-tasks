import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer(history),
        initialState,
        applyMiddleware(middleware),
    );
}
