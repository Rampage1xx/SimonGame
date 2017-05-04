/*
 import * as React from 'react';
 jest.unmock('immutable');
 import {shallow} from 'enzyme';
 import {List, Map} from 'immutable';
 import * as types from '../ClientSrc//Actions/ActionTypes';
 import {ActionColor} from '../../ClientSRC/Actions/ActionCreators';
 import {BLUE_INCREMENT, GREEN_INCREMENT, RED_INCREMENT, YELLOW_INCREMENT} from '../../ClientSRC/Actions/ActionTypes';
 import {AppComponent} from '../../ClientSRC/AppComponent';
 import {store} from '../../ClientSRC/Reducers/CombineReducers';
 import {playerReducer} from '../../ClientSRC/Reducers/Reducer';

 const ExpectedInitialState = Map({
 player_choices: List([]),
 });

 const UpdatedState = ExpectedInitialState.update('player_choices', (list: any) => list.push(1));
 const UpdatedState2 = UpdatedState.update('player_choices', (list: any) => list.push(1));
 describe.skip('player reducer', () => {
 it('should return the initial state', () => {
 expect(
 playerReducer(undefined, {}),
 ).toEqual(
 {...ExpectedInitialState},
 );
 });

 it('should handle color increment', () => {
 expect(
 playerReducer(ExpectedInitialState, {
 type: types.RED_INCREMENT,
 }),
 ).toEqual(
 {
 ...UpdatedState,
 },
 );
 expect(
 playerReducer(UpdatedState, {
 type: types.RED_INCREMENT,
 }),
 ).toEqual(
 {
 ...UpdatedState2,
 },
 ); },
 );

 },
 );

 describe.skip('it should the four colors to  the player_choices  array  to the store in the correct order' , () => {
 it ('pushes the colors', () => {
 const renderedComponent: any = shallow(
 <AppComponent/>,
 );
 // FOR SIMPLICITY EACH COLOR CHOSEN PUSHES A NUMBER TO THE ARRAY  1= RED, 2=BLUE, 3=GREEN,4=YELLOW
 store.dispatch(ActionColor(RED_INCREMENT));
 store.dispatch(ActionColor(YELLOW_INCREMENT));
 store.dispatch(ActionColor(GREEN_INCREMENT));
 store.dispatch(ActionColor(BLUE_INCREMENT));

 const result = store.getState().get('computerReducer').get('player_choices').toJS();
 expect(result).toEqual([1, 4, 3, 2]);
 });


 });
