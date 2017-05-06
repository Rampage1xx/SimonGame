import {List, Map} from 'immutable';
import {
    ACTIVE_COLOR, CLEAR_BOTH_LISTS, COMPUTER_GENERATED_COLOR, GAME_OVER, GAME_STARTED, PLAYER_CLEAR_LIST, PLAYER_GENERATED_COLOR,
    PLAYER_TURN, PLAYER_VICTORY, RESET_LIMIT, STRICT_MODE, TURN_OFF, TURN_ON
} from '../Actions/ActionTypes';
import {IcomputerReducer, IgeneralGameReducer, IplayerInitialState, IplayerReducer} from '../interfaces/reducers.interace';

// INITIAL STATUSES
const playerInitialState: IplayerInitialState = Map({
    playerTurn: false,
    player_choices: List([])
});

const generalGameInitialState = Map({
    color: 0,
    ON: false,
    strict: false,
    timeout: true,
    started: false
});

const randomGeneratedColorsInitialState = Map({
    generated_colors: List([]),
    limit: 1
});

// REDUCERS

export const playerReducer: IplayerReducer = (state = playerInitialState, action?) => {
    switch (action.type) {

        case PLAYER_GENERATED_COLOR:
            return state.update('player_choices', (list: List<number>) => list.push(action.color));
        case PLAYER_CLEAR_LIST:
            return state.update('player_choices', (list: List<number>) => list.clear());
        case CLEAR_BOTH_LISTS:
            return state.update('player_choices', (list: List<number>) => list.clear());
        case GAME_OVER:
            return state.update('player_choices', (list: List<number>) => list.clear());
        case PLAYER_TURN:
            return state.set('playerTurn', action.playerTurn);

        default:
            return state;

    }
};

export const computerReducer: IcomputerReducer = (state = randomGeneratedColorsInitialState, action?) => {
    const stateUpdate = (value: number) => state.update('generated_colors', (list: List<number>) => list.push(value));
    switch (action.type) {
        case COMPUTER_GENERATED_COLOR:
            return stateUpdate(action.color);

        case CLEAR_BOTH_LISTS:
            return state
                .update('limit', (value: any) => value + 1)
                .update('generated_colors', (list: List<number>) => list.clear());
        case GAME_OVER:
            return state
                .update('limit', (value: any) => 1)
                .update('generated_colors', (list: List<number>) => list.clear());
        case PLAYER_VICTORY:
            return state
                .update('limit', (value: any) => 'WIN');
        case RESET_LIMIT:
            return state.update('limit', (value: any) => 1);
        default:
            return state;

    }
};

export const generalGameReducer: IgeneralGameReducer = (state = generalGameInitialState, action?) => {
    switch (action.type) {
        case 'TIMEOUT':
            return state.set('TIMEOUT', action.timeout);
        case TURN_ON:
            return state.set('ON', action.on);
        case TURN_OFF:
            return state.set('ON', action.on);
        case STRICT_MODE:
            return state.set('strict', action.value);
        case ACTIVE_COLOR:
            return state.set('color', action.color);
        case GAME_STARTED:
            return state.set('started', action.value);
        default:
            return state;
    }
};

