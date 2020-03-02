import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import promiseMiddleware from 'redux-promise-middleware';

import {
    setSearchQuery,
    fetchGifs,
    loadMoreGifs
} from '../../store/actions';
import {
    SET_SEARCH_QUERY,
    FETCH_GIFS,
    FETCH_GIFS_PENDING,
    FETCH_GIFS_FULFILLED,
    LOAD_MORE_GIFS,
    LOAD_MORE_GIFS_PENDING,
    LOAD_MORE_GIFS_FULFILLED
} from '../../store/actionTypes';
import {
    GIFS_TRENDING_URL,
    GIFS_SEARCH_URL,
    API_KEY,
    DEFAULT_LIMIT
} from '../../constants';

const mockStore = configureMockStore([ promiseMiddleware ])

describe('Actions', () => {
  it(`Should create a ${SET_SEARCH_QUERY} action`, () => {
    const query = 'Kitten'
    const expectedAction = {
      type: SET_SEARCH_QUERY,
      payload: query
    }

    expect(setSearchQuery(query)).toEqual(expectedAction);
  });
});

describe('Async actions', () => {
    afterEach(() => fetchMock.restore());

    it(`Should create a ${FETCH_GIFS} action`, () => {
        const res = {
            data: [],
            pagination: {
                total_count: 0,
                count: 0,
                offset: 0
            },
            meta: {
                status: 200,
                msg: 'OK',
            }
        };
        const expectedActions = [
            { type: FETCH_GIFS_PENDING },
            { type: FETCH_GIFS_FULFILLED, payload: res }
        ];
        const store = mockStore({ gifs: {} });

        fetchMock.getOnce(`${GIFS_TRENDING_URL}?api_key=${API_KEY}&limit=${DEFAULT_LIMIT}&offset=0`, {
            body: res
        });

        return store.dispatch(fetchGifs()).then(() => 
            expect(store.getActions()).toEqual(expectedActions));
    });

    it(`Should create a ${LOAD_MORE_GIFS} action`, () => {
        const res = {
            data: [],
            pagination: {
                total_count: 0,
                count: 0,
                offset: 0
            },
            meta: {
                status: 200,
                msg: 'OK',
            }
        };
        const query = 'Kitten';
        const expectedActions = [
            { type: LOAD_MORE_GIFS_PENDING },
            { type: LOAD_MORE_GIFS_FULFILLED, payload: res }
        ];
        const store = mockStore({ gifs: {} });

        fetchMock.getOnce(`${GIFS_SEARCH_URL}?api_key=${API_KEY}&q=${query}&limit=${DEFAULT_LIMIT}&offset=0`, {
            body: res
        });

        return store.dispatch(loadMoreGifs(query)).then(() => 
            expect(store.getActions()).toEqual(expectedActions));
    });
});
