import React from 'react'
import { mount } from 'enzyme'
import { Container } from '../../containers/Container';
import { STATUS } from '../../constants';

function setup(status = '', count = 0) {
    const props = {
        fetchGifs: jest.fn(),
        loadMoreGifs: jest.fn(),
        query: '',
        gifs: {
            status,
            current: count,
            byId: {
                'xyz': {
                    id: 'xyz',
                    title: 'title',
                    image: '/gif'
                }
            },
            ids: ['xyz']
        }
    }
    const enzymeWrapper = mount(<Container {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Container component', () => {
    it('should render empty component', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('Empty').text()).toEqual('Nothing found...');
    });

    it('should render loader component', () => {
        const { enzymeWrapper } = setup(STATUS.LOADING);

        expect(enzymeWrapper.find('Loader div').hasClass('loader')).toBe(true);
    });

    it('should render error component', () => {
        const { enzymeWrapper } = setup(STATUS.ERROR);

        expect(enzymeWrapper.find('Error').text()).toEqual('Something went wrong...');
    });

    it('should render list component', () => {
        const { enzymeWrapper } = setup(STATUS.SUCCESS, 1);

        expect(enzymeWrapper.find('Card').key()).toEqual('xyz');
        expect(enzymeWrapper.find('Card img').prop('src')).toEqual('/gif');
        expect(enzymeWrapper.find('Card .content').text()).toEqual('title');
    });
});
