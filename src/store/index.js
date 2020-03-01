import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import { rootReducer } from './reducers';

export const configureStore = preloadedState => {
    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'instagif' })
        : compose;

    return createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(promiseMiddleware)
    ));
};
