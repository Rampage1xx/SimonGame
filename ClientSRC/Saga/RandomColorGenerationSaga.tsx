import {delay} from 'redux-saga';
import {call, cancelled, put, takeEvery} from 'redux-saga/effects';
import {actionActiveColor, actionPlayerTurn} from '../Actions/ActionCreators';
import {COMPUTER_GENERATED_COLOR} from '../Actions/ActionTypes';
import {randomColorGenerator, resetToInitialState} from '../ColorGeneration/ColorGeneration';
import {controlListLimit} from '../ColorGeneration/ControlListLimit';
import {soundPlayBack} from '../ColorGeneration/soundPlayBack';

function* randomColorGeneratedColorEventHandling(action: { type: string, color: number }) {
    try {
        // enables the chosen color
        yield put(actionActiveColor(action.color));
        yield call(soundPlayBack, action.color);
        yield call(delay, 1000);
        // disables the chosen color
        yield put(actionActiveColor(0));
        yield call(delay, 500);
        // We control if the generated content has hit the limit,
        // if so the control is handled to the player to let him reproduce the sequence
        const results: string = yield call(controlListLimit);
        if (results === 'player turn') {
            return yield put(actionPlayerTurn(true));
        } else {
            return yield call(randomColorGenerator);
        }
    } catch (err) {
        // error handling returns the game to the initial state
        yield call(resetToInitialState);
    } finally {
        // cancellation handling pretty self explanatory
        if (yield cancelled()) {

            yield call(resetToInitialState);
        }

    }
}

export function* RandomColorGenerationWatcher() {

    yield takeEvery(COMPUTER_GENERATED_COLOR, randomColorGeneratedColorEventHandling);
}
