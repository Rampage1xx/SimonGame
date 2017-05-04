import {
    actionActiveColor, actionClearLists, actionComputerHasGeneratedColor, actionGameStarted, actionGameStopped, actionPlayerHasChosenColor,
    actionPlayerTurn, actionResetLimit, actionStrictMode, actionTurnOff, actionTurnOn
} from '../Actions/ActionCreators';
import {store} from '../Reducers/CombineReducers';

const colorsId: number[] = [1, 2, 3, 4];

export const resetToInitialState = () => {
    // gives back the control to the computer and resets the limit to one
    store.dispatch(actionActiveColor(0));
    store.dispatch(actionPlayerTurn(false));
    store.dispatch(actionClearLists());
    store.dispatch(actionGameStopped());
    store.dispatch(actionStrictMode(false));
    // return
    return store.dispatch(actionResetLimit());
};

export const colorDispatch = (color: number, second = '') => {
    // start the player events
    return store.dispatch(actionPlayerHasChosenColor(color));

};

export const randomColorGenerator = () => {
    // color generated by the computer
    // picks a color from the array
    const color: number = colorsId[Math.floor(Math.random() * colorsId.length)];

    // dispatches the color and starts the random generated color events handling
    store.dispatch(actionGameStarted());
    return store.dispatch(actionComputerHasGeneratedColor(color));
};

// TURN ON/OFF SWITCH FUNCTIONS

export const turnOnState = () => {
    // ON and OFF switch
    store.dispatch(actionTurnOn());
};
export const turnOffState = () => {
    resetToInitialState();
    store.dispatch(actionTurnOff());
};

// enables/disables strict mode

export const strictMode = (value: boolean, event = '') => {
    store.dispatch(actionStrictMode(value));
};
