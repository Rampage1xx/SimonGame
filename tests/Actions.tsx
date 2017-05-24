import {
    actionActiveColor, actionClearLists, actionComputerHasGeneratedColor, actionGameOver, actionGameStarted,
    actionGameStopped, actionPlayerHasChosenColor, actionPlayerTurn, actionPlayerVictory, actionReplay,
    actionResetLimit, actionStrictMode, actionTurnOff, actionTurnOn
} from '../ClientSRC/Actions/ActionCreators';
import {
    ACTIVE_COLOR, CLEAR_BOTH_LISTS, COLOR_REPLAY, COMPUTER_GENERATED_COLOR, GAME_OVER, GAME_STARTED,
    PLAYER_GENERATED_COLOR, PLAYER_TURN, PLAYER_VICTORY, RESET_LIMIT, STRICT_MODE, TURN_OFF, TURN_ON
} from '../ClientSRC/Actions/ActionTypes';

interface IITStatementFactory {

    (parameter: {
        message: string,
        valueToCheck: object,
        expectedValue: object
    })

}

describe('Testing actions  creation', () => {

    const itStatementFactory: IITStatementFactory = ({message, valueToCheck, expectedValue}) =>
        it(`should create an action for the ${message}`, () => {
            expect(valueToCheck).toEqual(expectedValue);
        });

    itStatementFactory({
        message: 'player chosen color',
        valueToCheck: actionPlayerHasChosenColor(1),
        expectedValue: {type: PLAYER_GENERATED_COLOR, color: 1}
    });

    itStatementFactory({
        message: 'computer chosen color',
        valueToCheck: actionComputerHasGeneratedColor(3),
        expectedValue: {type: COMPUTER_GENERATED_COLOR, color: 3}
    });

    itStatementFactory({
        message: 'Game Over',
        valueToCheck: actionGameOver(),
        expectedValue: {type: GAME_OVER}
    });

    itStatementFactory({
        message: 'Clear List',
        valueToCheck: actionClearLists(),
        expectedValue: {type: CLEAR_BOTH_LISTS}
    });

    itStatementFactory({
        message: 'Active Color',
        valueToCheck: actionActiveColor(2),
        expectedValue: {type: ACTIVE_COLOR, color: 2}
    });

    itStatementFactory({
        message: 'player turn',
        valueToCheck: actionPlayerTurn(true),
        expectedValue: {type: PLAYER_TURN, playerTurn: true}
    });

    itStatementFactory({
        message: 'reset limit',
        valueToCheck: actionResetLimit(),
        expectedValue: {type: RESET_LIMIT}
    });

    itStatementFactory({
        message: 'turn off',
        valueToCheck: actionTurnOff(),
        expectedValue: {type: TURN_OFF, on: false}
    });

    itStatementFactory({
        message: 'turn on',
        expectedValue: actionTurnOn(),
        valueToCheck: {type: TURN_ON, on: true}
    });

    itStatementFactory({
        message: 'replay',
        valueToCheck: actionReplay(1, 2),
        expectedValue: {type: COLOR_REPLAY, color: 1, index: 2}
    });
    itStatementFactory({
        message: 'started',
        valueToCheck: actionGameStarted(),
        expectedValue: {type: GAME_STARTED, value: true}
    });

    itStatementFactory({
        message: 'stopped',
        valueToCheck: actionGameStopped(),
        expectedValue: {type: GAME_STARTED, value: false}
    });
    itStatementFactory({
        message: 'strict mode',
        valueToCheck: actionStrictMode(true),
        expectedValue: {type: STRICT_MODE, value: true}
    });
    itStatementFactory({
        message: 'player turn',
        valueToCheck: actionPlayerVictory(),
        expectedValue: {type: PLAYER_VICTORY}
    });

    itStatementFactory({
        message: 'clear list',
        valueToCheck: actionClearLists(),
        expectedValue: {type: CLEAR_BOTH_LISTS}
    });
});
