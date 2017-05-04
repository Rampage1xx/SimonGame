/*
 import {shallow} from 'enzyme';
 import * as React from 'react';
 import {BLUE_INCREMENT} from '../../ClientSRC/Actions/ActionTypes';
 import {AppComponent} from '../../ClientSRC/AppComponent';
 describe.skip('tests AppComponent', () => {
 it('renders a <AppComponent>', () => {
 const renderedComponent = shallow(
 <AppComponent></AppComponent>,
 );
 expect(
 renderedComponent.find('#AppComponent').node,
 ).toBeDefined();
 });

 it(' the colorDispatch method should return the string passed as a type', () => {
 const renderedComponent: any = shallow(
 <AppComponent></AppComponent>,
 );
 expect(renderedComponent.instance().colorDispatch(BLUE_INCREMENT)).toEqual({type: 'BLUE_INCREMENT'});

 });

 });

