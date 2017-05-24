import {shallow} from 'enzyme';
import * as React from 'react';
import {SimonColor} from '../ClientSRC/Components/SimonColor';

describe('testing the SimonColor Component', () => {
    const simonColorShallow = shallow(<SimonColor />);
    it('should render', () => {
        expect(simonColorShallow.shallow()).toBeTruthy();
    });
    it('should', () => {
        console.log(simonColorShallow.debug())
    })
});
