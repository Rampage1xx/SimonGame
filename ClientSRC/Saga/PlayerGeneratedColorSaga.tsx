import {delay, takeEvery} from 'redux-saga';
import {call, cancelled, put} from 'redux-saga/effects';
import {
    actionActiveColor, actionClearLists, actionGameOver, actionPlayerTurn, actionPlayerVictory, actionReplay
} from '../Actions/ActionCreators';
import {GAME_OVER, PLAYER_GENERATED_COLOR} from '../Actions/ActionTypes';
import {randomColorGenerator, resetToInitialState} from '../ColorGeneration/ColorGeneration';
import {assertEquality} from '../ColorGeneration/ListsEquality';
import {getTheColorToReplay} from '../ColorGeneration/ReplayColors';
import {soundPlayBack} from '../ColorGeneration/soundPlayBack';

function* handleGameOver() {
    try {
        yield call(randomColorGenerator);
    } finally {
        if (yield cancelled()) {
            yield call(resetToInitialState);
        }
    }
}

function* playerEventHandling(action: { color }) {
    try {

        // disables player interaction
        yield put(actionPlayerTurn(false));
        const {color} = action;
        // enables the chosen color
        yield put(actionActiveColor(color));
        yield call(soundPlayBack, color);
        yield call(delay, 1000);
        // disables the chosen color
        yield put(actionActiveColor(0));
        yield call(delay, 500);

        // establishes if the answers were all correct or if they were so far  right
        // that's why equality and partial equality
        const results = yield call(assertEquality);
        if (results === 'victory') {
            // insert victory for 20 right guesses
            yield put(actionPlayerVictory());
            yield call(delay, 2000);
            return yield call(resetToInitialState);
        } else if (results === 'equality') {
            // pass the turn to the computer
            // player has reproduced in a correct sequence all the computer generated colors
            yield put(actionClearLists()); // clear both Lists that contain the answers
            return yield call(randomColorGenerator);
        } else if (results === 'partialEquality') {
            // the colors chosen so far were all correct
            return yield put(actionPlayerTurn(true));
        } else if (results === 'gameOver') {
            // gameOver is the result of a wrong answer plus Simon strict mode
            return yield put(actionGameOver()); // resets the lists and put the limit back to one
        } else if (results === 'COLOR_REPLAY') {
            // player has given a wrong sequence but the game isn't in a strict mode
            // the computer will replay the sequence
            const colorID: number = yield call(getTheColorToReplay, 0);
            // send the color and the index position of the color
            return yield put(actionReplay(colorID, 0));
        }
    } catch (err) {
        // resets to initial state if error
        yield call(resetToInitialState);
    } finally {
        if (yield cancelled()) {
            yield call(resetToInitialState);

        }
    }
}

export function* PlayerGeneratedColorWatcher() {

    yield takeEvery(PLAYER_GENERATED_COLOR, playerEventHandling);
    yield takeEvery(GAME_OVER, handleGameOver);
}
