import {store} from '../Reducers/CombineReducers';
import {selectorContainingColorsAndGameStatus} from '../Selectors/GameSelectors';

export const getTheColorToReplay = (positionToReplay: number): number => {
    // finds out which color is in the index
    const {generatedColors} = selectorContainingColorsAndGameStatus(store.getState());
    return generatedColors.get(positionToReplay);

};
