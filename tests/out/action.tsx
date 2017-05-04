/*
 import * as actions from '../ClientSrc//Actions/ActionCreators'
 import * as types from '../ClientSrc//Actions/ActionTypes'
 function sum(a, b) {
 return a + b;
 }

 test.skip('adds 1 + 2 to equal 3', () => {
 expect(sum(1, 2)).toBe(3);
 });


 describe.skip('actions', () => {
 it('it should dispatch the green increment action', () => {
 const text = 'Finish docs'
 const expectedAction = {
 type: types.GREEN_INCREMENT,
 // text
 }
 expect(actions.ActionColor(types.GREEN_INCREMENT)).toEqual(expectedAction)
 })
 })
