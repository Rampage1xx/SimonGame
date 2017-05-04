import {store} from '../Reducers/CombineReducers';
import {selectorContainingColorsAndGameStatus} from '../Selectors/GameSelectors';

export const controlListLimit = () => {
    // checks if the computer has reached the limit of generated colors
    // if so it passes the control to the player, otherwise it keeps generating content.
    // The values are fetched inside the reselectors.
    // count() is used to get the length of the list.
    // We return a string that is checked by the saga RandomColoGenerationSaga,
    // it will dispatch actions based on an equality check on the string
    const {limit, generatedColors} = selectorContainingColorsAndGameStatus(store.getState());
    if (limit === generatedColors.count()) {
        return 'player turn';
    } else {
        return 'generate color';
    }
};

