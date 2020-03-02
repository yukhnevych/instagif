import React from 'react'
import { shallow } from 'enzyme'
import { Counter } from '../../containers/Counter';

function setup() {
    const props = {
        total: 10,
        current: 1
    }
    const enzymeWrapper = shallow(<Counter {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Counter component', () => {
    it('should render counter component', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.props().children).toEqual('1 / 10');
    });
});
