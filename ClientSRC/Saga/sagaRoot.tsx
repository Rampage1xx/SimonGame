import {Task} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {TURN_OFF, TURN_ON} from '../Actions/ActionTypes';
import {PlayerGeneratedColorWatcher} from './PlayerGeneratedColorSaga';
import {RandomColorGenerationWatcher} from './RandomColorGenerationSaga';
import {replayColorsWatcher} from './ReplaySaga';

export  default function* rootSaga() {
    while (yield take(TURN_ON)) {
        const delegate: Task[] = yield [
            fork(PlayerGeneratedColorWatcher),
            fork(RandomColorGenerationWatcher),
            fork(replayColorsWatcher)
        ];
        yield take(TURN_OFF);
        yield delegate.map((watcher) => cancel(watcher));
    }

};
