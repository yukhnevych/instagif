import { searchReducer } from '../../store/reducers/search';
import { gifsReducer } from '../../store/reducers/gifs';
import {
    SET_SEARCH_QUERY,
    FETCH_GIFS_PENDING,
    FETCH_GIFS_FULFILLED,
    FETCH_GIFS_REJECTED,
    LOAD_MORE_GIFS_PENDING,
    LOAD_MORE_GIFS_FULFILLED,
    LOAD_MORE_GIFS_REJECTED
} from '../../store/actionTypes';
import { STATUS } from '../../constants';

describe('Search reducer', () => {
    it('should return the initial state', () =>
        expect(searchReducer(undefined, {})).toEqual({
            query: ''
        }));

    it('should handle SET_SEARCH_QUERY', () => 
        expect(searchReducer({}, {
            type: SET_SEARCH_QUERY,
            payload: 'Kitten'
        })).toEqual({
            query: 'Kitten'
        }));
});

describe('Gif reducer', () => {
    const initialState = {
        status: '',
        byId: {},
        ids: [],
        total: 0,
        current: 0
    };

    it('should return the initial state', () =>
        expect(gifsReducer(undefined, {}))
            .toEqual(initialState));

    it('should handle FETCH_GIFS_PENDING', () => 
        expect(gifsReducer(initialState, {
            type: FETCH_GIFS_PENDING
        })).toEqual({
            status: STATUS.LOADING,
            byId: {},
            ids: [],
            total: 0,
            current: 0
        }));

    it('should handle FETCH_GIFS_FULFILLED', () =>
        expect(gifsReducer(initialState, {
            type: FETCH_GIFS_FULFILLED,
            payload: {
                data: [{
                    id: 'xyz',
                    title: 'title',
                    images: {
                        downsized_large: {
                            url: '/gif'
                        }
                    }
                }],
                pagination: {
                    count: 1,
                    offset: 0,
                    total_count: 10
                }
            }
        })).toEqual({
            status: STATUS.SUCCESS,
            byId: {
                'xyz': {
                    id: 'xyz',
                    title: 'title',
                    image: '/gif'
                }
            },
            ids: ['xyz'],
            total: 10,
            current: 1
        }));

    it('should handle FETCH_GIFS_REJECTED', () =>
        expect(gifsReducer(initialState, {
            type: FETCH_GIFS_REJECTED
        })).toEqual({
            status: STATUS.ERROR,
            byId: {},
            ids: [],
            total: 0,
            current: 0
        }));

    it('should handle LOAD_MORE_GIFS_PENDING', () => 
        expect(gifsReducer(initialState, {
            type: LOAD_MORE_GIFS_PENDING
        })).toEqual({
            status: STATUS.LOADING,
            byId: {},
            ids: [],
            total: 0,
            current: 0
        }));

    it('should handle LOAD_MORE_GIFS_FULFILLED', () => {
        expect(gifsReducer(initialState, {
            type: LOAD_MORE_GIFS_FULFILLED,
            payload: {
                data: [{
                    id: 'xyz',
                    title: 'title',
                    images: {
                        downsized_large: {
                            url: '/gif'
                        }
                    }
                }],
                pagination: {
                    count: 1,
                    offset: 0,
                    total_count: 10
                }
            }
        })).toEqual({
            status: STATUS.SUCCESS,
            byId: {
                'xyz': {
                    id: 'xyz',
                    title: 'title',
                    image: '/gif'
                }
            },
            ids: ['xyz'],
            total: 10,
            current: 1
        })
    });

    it('should handle LOAD_MORE_GIFS_REJECTED', () => 
        expect(gifsReducer(initialState, {
            type: LOAD_MORE_GIFS_REJECTED
        })).toEqual({
            status: STATUS.ERROR,
            byId: {},
            ids: [],
            total: 0,
            current: 0
        }));
});
