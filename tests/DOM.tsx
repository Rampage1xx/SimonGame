import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {SimonColor} from '../ClientSRC/Components/SimonColor';
import {InnerCircle} from '../ClientSRC/Components/InnerCircle';

describe('testing the SimonColor Component', () => {
    const SimonComponent = <SimonColor colorNumber={1} css={'test'} ON={true} children playerTurn={true}/>;
    const simonColorShallow = shallow(SimonComponent);
    const simonColorMount = mount(SimonComponent)
    it('should  shallow render', () => {
        expect(simonColorShallow.shallow()).toBeTruthy();
    });
    it('should  shallow render the passed className', () => {
        expect(simonColorShallow.props().className).toEqual('test');
    });
    it('should mount', () => {
        console.log(simonColorMount.debug())
        expect(simonColorMount).toBeTruthy()
    })
});

describe('testing the InnerCircle Component', () => {
   // const innerCircleShallow = shallow(<InnerCircle playerTurn={true}/>)
});
