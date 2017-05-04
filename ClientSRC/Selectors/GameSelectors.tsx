import {List} from 'immutable';
import {createSelector} from 'reselect';
import {createStructuredSelector} from 'reselect/lib';
import {generatedColorsSelector, limitSelector, randomGeneratedColorsReducerSelector} from './computerSelector';
import {generalGameStatesSelector} from './GameStatusesSelector';
import {playerReducerSelector, playerTurnSelector} from './playerSelector';

export const storeSelector = (store) => store;
// Here we assess the equality between the player and computer generated content
// if they match in size and length then the player has passed the round and we can move on
export const assertListsEqualitySelector = () => createSelector(
    storeSelector,
    playerReducerSelector,
    randomGeneratedColorsReducerSelector,
    (storeStatus, playerReducer, randomGeneratedColorsReducer) => {
        return playerReducer.getIn(['player_choices'])
            .equals(randomGeneratedColorsReducer.getIn(['generated_colors']));
    }
);
// This check comes into play if the precedent one has returned a false value.
// The computer array size gets reduced to the same size of the player one and then an equality check
// between the two starts. The result should be true if the answer given by the player so far were right
export const assertListsPartialEqualitySelector = () => createSelector(
    storeSelector,
    playerReducerSelector,
    randomGeneratedColorsReducerSelector,
    (storeStatus, playerReducer, randomGeneratedColorsReducer) => {
        const playerListSize = playerReducer.getIn(['player_choices']).count();
        const playerList = playerReducer.getIn(['player_choices']);
        const reducedComputerGeneratedList: List<number> = randomGeneratedColorsReducer
            .getIn(['generated_colors'])
            .setSize(playerListSize);
        return reducedComputerGeneratedList.equals(playerList);
    }
);
export const selectorContainingColorsAndGameStatus = createStructuredSelector({
    equality: assertListsEqualitySelector(),
    generatedColors: generatedColorsSelector(),
    partialEquality: assertListsPartialEqualitySelector(),
    playerStatus: playerTurnSelector(),
    generalStatus: generalGameStatesSelector(),
    limit: limitSelector()
});

