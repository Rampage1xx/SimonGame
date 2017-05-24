import {
    actionActiveColor, actionClearLists, actionComputerHasGeneratedColor, actionGameOver, actionGameStarted,
    actionGameStopped,
    actionPlayerHasChosenColor,
    actionPlayerTurn, actionReplay, actionResetLimit, actionTurnOff, actionTurnOn, actionStrictMode
} from '../ClientSRC/Actions/ActionCreators';
import {
    ACTIVE_COLOR, CLEAR_BOTH_LISTS, COLOR_REPLAY, COMPUTER_GENERATED_COLOR, GAME_OVER, GAME_STARTED,
    PLAYER_GENERATED_COLOR,
    PLAYER_TURN, RESET_LIMIT, TURN_OFF, TURN_ON, STRICT_MODE
} from '../ClientSRC/Actions/ActionTypes';
describe('Testing actions  creation', () => {

    const messageFactory = (message) => `should create an action for the ${message}`;

    const parameters = (type: string, actionParameters: object) => ({type, ...actionParameters});

    const expectToEqual = (value: object, expected: object) => expect(value).toEqual(expected);

    it(messageFactory('player chosen color'), () => {
        expectToEqual(actionPlayerHasChosenColor(1), {type: PLAYER_GENERATED_COLOR, color: 1});
    });
    it(messageFactory('computer chosen color'), () => {
        expectToEqual(actionComputerHasGeneratedColor(3), {type: COMPUTER_GENERATED_COLOR, color: 3});
    });
    it(messageFactory('Game Over'), () => {
        expectToEqual(actionGameOver(), {type: GAME_OVER});
    });
    it(messageFactory('Clear List'), () => {
        expectToEqual(actionClearLists(), {type: CLEAR_BOTH_LISTS});
    });
    it(messageFactory('Active Color'), () => {
        expectToEqual(actionActiveColor(2), {type: ACTIVE_COLOR, color: 2});
    });
    it(messageFactory('player turn'), () => {
        expectToEqual(actionPlayerTurn(true), {type: PLAYER_TURN, playerTurn: true});
    });
    it(messageFactory('reset limit'), () => {
        expectToEqual(actionResetLimit(), {type: RESET_LIMIT});
    });
    it(messageFactory('turn off'), () => {
        expectToEqual(actionTurnOff(), {type: TURN_OFF});
    });
    it(messageFactory('turn on'), () => {
        expectToEqual(actionTurnOn(), {type: TURN_ON});
    });
    it(messageFactory(' replay'), () => {
        expectToEqual(actionReplay(1, 2), {type: COLOR_REPLAY, color: 1, index: 2});
    });
    it(messageFactory('started'), () => {
        expectToEqual(actionGameStarted(), {type: GAME_STARTED, value: true});
    });
    it(messageFactory('stopped'), () => {
        expectToEqual(actionGameStopped(), {type: GAME_STARTED, value: false});
    });
    it(messageFactory('strict mode'), () => {
        expectToEqual(actionStrictMode(true), {type: STRICT_MODE, value: true});
    });

});
