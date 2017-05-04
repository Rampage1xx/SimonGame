import {createSelector} from 'reselect';

export const randomGeneratedColorsReducerSelector = (state) => state.get('computerReducer');

export const generatedColorsSelector = () => createSelector(
    randomGeneratedColorsReducerSelector,
    (randomGeneratedColorsReducer) => randomGeneratedColorsReducer.getIn(['generated_colors'])
);

export const limitSelector = () => createSelector(
    randomGeneratedColorsReducerSelector,
    (randomGeneratedColorsReducer) => randomGeneratedColorsReducer.get('limit')
);

