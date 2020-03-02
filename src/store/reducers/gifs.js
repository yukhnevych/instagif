import { STATUS } from '../../constants';
import {
    FETCH_GIFS_PENDING,
    FETCH_GIFS_FULFILLED,
    FETCH_GIFS_REJECTED,
    LOAD_MORE_GIFS_PENDING,
    LOAD_MORE_GIFS_FULFILLED,
    LOAD_MORE_GIFS_REJECTED
} from '../actionTypes';

const initialState = {
    status: '',
    byId: {},
    ids: [],
    total: 0,
    current: 0
};

const formatResponse = data => data.reduce((acc, item) => ({
    ...acc,
    [item.id]: {
        id: item.id,
        title: item.title,
        image: item.images.downsized_large.url
    }
}), {});

export const gifsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case FETCH_GIFS_PENDING:
            return {
                ...initialState,
                status: STATUS.LOADING
            };

        case LOAD_MORE_GIFS_PENDING:
            return {
                ...state,
                status: STATUS.LOADING
            };

        case FETCH_GIFS_FULFILLED:
        case LOAD_MORE_GIFS_FULFILLED:
            const gifs = formatResponse(payload.data);

            return {
                byId: {
                    ...state.byId,
                    ...gifs
                },
                ids: state.ids.concat(Object.keys(gifs)),
                status: STATUS.SUCCESS,
                total: payload.pagination.total_count,
                current: payload.pagination.count + payload.pagination.offset
            };

        case FETCH_GIFS_REJECTED:
        case LOAD_MORE_GIFS_REJECTED:
            return {
                ...state,
                status: STATUS.ERROR
            };

        default:
            return state;
    }
};
