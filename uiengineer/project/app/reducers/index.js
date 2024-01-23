import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = {}, action) => {
        switch (action.type) {
            default:
                return state;
        }
    }
});

export default createRootReducer;
