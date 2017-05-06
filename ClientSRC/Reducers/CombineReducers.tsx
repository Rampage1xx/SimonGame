import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from '../Saga/sagaRoot';
import {computerReducer, generalGameReducer, playerReducer} from './Reducer';

declare const window: any;
// debug for redux
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// we create an History model kinda intercepts the url from the browser (not accurate)
export const History: any = createHistory();
const sagaMiddleware = createSagaMiddleware();

const historyRouter = routerMiddleware(History);
// here we  insert the various reducers that flow into the store
const reducers = combineReducers({
    computerReducer,
    generalGameReducer,
    playerReducer,
    router: routerReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(historyRouter, sagaMiddleware))
);
sagaMiddleware.run(sagaRoot);

