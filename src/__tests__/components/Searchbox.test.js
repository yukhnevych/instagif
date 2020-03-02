import React from 'react'
import { shallow } from 'enzyme'
import { Searchbox } from '../../containers/Searchbox';

function setup() {
    const props = {
        query: '',
        fetchGifs: jest.fn(),
        setSearchQuery: jest.fn(),
    }
    const enzymeWrapper = shallow(<Searchbox {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Searchbox component', () => {
    it('should render searchbox component', () => {
        const { enzymeWrapper } = setup();
        const inputProps = enzymeWrapper.find('input').props();
        const buttonText = enzymeWrapper.find('button').text();

        expect(inputProps.placeholder).toEqual('Search Giphy');
        expect(buttonText).toEqual('Search');
    });

    it('should change input value', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('input').props().value).toEqual('');
        enzymeWrapper.setProps({ query: 'Kitten' });
        expect(enzymeWrapper.find('input').props().value).toEqual('Kitten');
    });

    it('should call setSearchQuery onChange', () => {
        const { enzymeWrapper, props } = setup();

        expect(props.setSearchQuery.mock.calls.length).toBe(0);
        enzymeWrapper.find('input').props().onChange({ target: { value: 'Kitten' } });
        expect(props.setSearchQuery.mock.calls.length).toBe(1);
    });

    it('should call fetchGifs onClick', () => {
        const { enzymeWrapper, props } = setup();

        expect(props.fetchGifs.mock.calls.length).toBe(0);
        enzymeWrapper.find('button').props().onClick();
        expect(props.fetchGifs.mock.calls.length).toBe(1);
    });

    it('should call fetchGifs onKeyPress Enter', () => {
        const { enzymeWrapper, props } = setup();

        expect(props.fetchGifs.mock.calls.length).toBe(0);
        enzymeWrapper.find('input').props().onKeyPress({ key: 'Enter' });
        expect(props.fetchGifs.mock.calls.length).toBe(1);
    });
});
