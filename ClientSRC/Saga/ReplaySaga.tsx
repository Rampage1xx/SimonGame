import {delay} from 'redux-saga';
import {call, cancelled, put, takeEvery} from 'redux-saga/effects';
import {actionActiveColor, actionClearPlayerList, actionPlayerTurn, actionReplay} from '../Actions/ActionCreators';
import {COLOR_REPLAY} from '../Actions/ActionTypes';
import {resetToInitialState} from '../ColorGeneration/ColorGeneration';
import {getTheColorToReplay} from '../ColorGeneration/ReplayColors';
import {soundPlayBack} from '../ColorGeneration/soundPlayBack';
import {store} from '../Reducers/CombineReducers';
import {selectorContainingColorsAndGameStatus} from '../Selectors/GameSelectors';

// This ugly blob mess needs to be refactored into smaller pieces.
// It has the function to replay the array in color generated by the PC
// in the case that the player has given a wrong answer and the strict mode isn't enable
function* replayColorsSaga(action: { color: number, index: number }) {
    try {
        yield put(actionPlayerTurn(false));
        let {index} = action;
        const {color} = action;
        const {generatedColors} = selectorContainingColorsAndGameStatus(store.getState());
        if (index === generatedColors.count()) {
            yield put(actionClearPlayerList());
            return yield put(actionPlayerTurn(true));
        }
        yield put(actionActiveColor(color));
        yield call(soundPlayBack, color);
        yield call(delay, 1000);
        yield put(actionActiveColor(0));
        yield call(delay, 500);
        const nextIndexNumber: number = ++index;
        const nextColor: number = yield call(getTheColorToReplay, nextIndexNumber);
        yield put(actionReplay(nextColor, nextIndexNumber));
    } catch (err) {
        // resets to initial state if an error
        yield call(resetToInitialState);
    } finally {
        if (yield cancelled()) {
            yield call(resetToInitialState);
        }
    }
}

export function*  replayColorsWatcher() {
    yield takeEvery(COLOR_REPLAY, replayColorsSaga);
}
