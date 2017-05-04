import {createSelector} from 'reselect';

// These selectors get the playerTurn and player_choices array.

export const playerReducerSelector = (state) => state.get('playerReducer');

export const playerTurnSelector = () => createSelector(
    playerReducerSelector,
    (playerReducer) => playerReducer.get('playerTurn')
);

export const playerChoicesSelector = () => createSelector(
    playerReducerSelector,
    (playerReducer) => playerReducer.getIn(['player_choices'])
);