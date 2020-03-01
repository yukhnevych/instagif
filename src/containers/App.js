import React from 'react';
import { Provider } from 'react-redux';

import { ConnectedSearchbox } from './Searchbox';
import { ConnectedContainer } from './Container';
import { ConnectedCounter } from './Counter';
import { configureStore } from '../store';

const store = configureStore();

export const App = () => <Provider store={ store }>
    <nav className="navbar is-fixed-top is-black is-nav-centered"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-item">
            <ConnectedSearchbox />
        </div>
        <div className="navbar-item">
            <ConnectedCounter />
        </div>
    </nav>
    <div className="columns is-centered">
        <div className="column is-half">
            <ConnectedContainer />
        </div>
    </div>
</Provider>;
