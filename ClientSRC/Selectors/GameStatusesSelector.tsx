import {createSelector} from 'reselect';

export const generalGameSelector = (state) => state.get('generalGameReducer');
// We get the various states from the generalGameReducer
// and map them to a key that is later fetched by the AppContainer
export const generalGameStatesSelector = () => createSelector(
    generalGameSelector,
    (state) => {
        return {
            ON: state.get('ON'),
            color: state.get('color'),
            started: state.get('started'),
            strict: state.get('strict'),
            timeout: state.get('timeout')
        };
    }
);

export const activeColorSelector = () => createSelector(
    generalGameSelector,
    (state) => state.get('color')
);
