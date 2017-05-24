import {
    ACTIVE_COLOR, CLEAR_BOTH_LISTS, COLOR_REPLAY, COMPUTER_GENERATED_COLOR, GAME_OVER, GAME_STARTED, PLAYER_CLEAR_LIST,
    PLAYER_GENERATED_COLOR, PLAYER_TURN, PLAYER_VICTORY, RESET_LIMIT, STRICT_MODE, TURN_OFF, TURN_ON
} from './ActionTypes';

export const actionPlayerHasChosenColor = (color: number = 0) => {

    return {
        type: PLAYER_GENERATED_COLOR,
        color
    };
};
export const actionComputerHasGeneratedColor = (color: number) => {
    return {
        type: COMPUTER_GENERATED_COLOR,
        color
    };

};

export const actionGameOver = () => {
    return {
        type: GAME_OVER
    };
};

export const actionClearLists = () => {

    return {
        type: CLEAR_BOTH_LISTS
    };
};

export const actionActiveColor = (color: number) => {
    return {
        type: ACTIVE_COLOR,
        color
    };

};

export const actionPlayerTurn = (playerTurn: boolean) => {
    return {
        type: PLAYER_TURN,
        playerTurn
    };
};

export const actionResetLimit = () => {

    return {
        type: RESET_LIMIT
    };
};

export const actionTurnOff = () => {
    return {
        type: TURN_OFF,
        on: false
    };
};

export const actionTurnOn = () => {

    return {
        type: TURN_ON,
        on: true

    };
};

export const actionReplay = (color: number, index: number) => {
    return {
        type: COLOR_REPLAY,
        color,
        index
    };

};

export const actionGameStarted = () => {
    return {
        type: GAME_STARTED,
        value: true
    };
};

export const actionGameStopped = () => {
    return {
        type: GAME_STARTED,
        value: false
    };
};

export const actionStrictMode = (value: boolean) => {

    return {
        type: STRICT_MODE,
        value
    };
};

export const actionPlayerVictory = () => {
    return {
        type: PLAYER_VICTORY
    };
};

export const actionClearPlayerList = () => {
    return {
        type: PLAYER_CLEAR_LIST
    };
};
