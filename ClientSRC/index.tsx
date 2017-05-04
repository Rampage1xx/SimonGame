declare let require;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import 'react-select/dist/react-select.css';
// Things to do: implement limit check at 20... or not?
// store is the sum of the reducers plus the middlewares
import {History, store} from './Reducers/CombineReducers';

import Routes from './Routes';
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ History }>
            { Routes }
        </Router>
    </Provider>,
    document.getElementById('app')
);
