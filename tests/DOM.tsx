import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {SimonColor} from '../ClientSRC/Components/SimonColor';

describe('testing the SimonColor Component', () => {
    const propsObject = {
        colorNumber: 1,
        css: 'test',
        ON: true,
        playerTurn: true
    };
    const SimonComponent = <SimonColor {...propsObject}/>;
    const simonColorShallow = shallow(SimonComponent);
    const simonColorMount = mount(SimonComponent);

    it('should  shallow render', () => {
        expect(simonColorShallow.shallow()).toBeTruthy();
    });
    it('should  shallow render the passed className', () => {
        expect(simonColorShallow.props().className).toEqual('test');
    });
    it('should mount', () => {
        expect(simonColorMount).toBeTruthy();
    });
    it('should have the props', () => {
        expect(simonColorMount.props()).toEqual(propsObject);
    });

});

describe('testing the InnerCircle Component', () => {
    // const innerCircleShallow = shallow(<InnerCircle playerTurn={true}/>)
});
