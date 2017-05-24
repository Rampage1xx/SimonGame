import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {InnerCircle} from '../ClientSRC/Components/InnerCircle';
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
        expect(simonColorShallow.shallow().find('.test')).toBeTruthy();
    });
    it('should mount', () => {
        expect(simonColorMount).toBeTruthy();
    });
    it('should have the props', () => {
        expect(simonColorMount.props()).toEqual(propsObject);
    });

    it('should render a div with the  passed className', () => {
        expect(simonColorMount.find('.test').type()).toEqual('div');
    });

});

describe('testing the InnerCircle Component', () => {
    const props = {
        generalGameStatus: {
            strict: true,
            timeout: false,
            ON: true,
            color: 1,
            started: true
        },
        playerTurn: true,
        limit: 3,
        pcTurn: false,
        timeout: false
    };

    const ComponentInnerCircle = <InnerCircle { ...props }/>;
    const innerCircleShallow = shallow(ComponentInnerCircle);

    it('should shallow render', () => {
        console.log(innerCircleShallow.debug())
    })
});
