import {
    ACTION_TYPE,
    STATUS
} from '../../constants';

const initialState = {
    status: '',
    byId: {},
    ids: [],
    total: 0,
    current: 0
}

const formatResponse = data => data.reduce((acc, item) => ({
    ...acc,
    [item.id]: {
        id: item.id,
        title: item.title,
        image: item.images.downsized_large.url,
        time: item.import_datetime
    }
}), {});

export const gifsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ACTION_TYPE.FETCH_GIFS_PENDING:
            return {
                ...initialState,
                status: STATUS.LOADING
            };

        case ACTION_TYPE.LOAD_MORE_GIFS_PENDING:
            return {
                ...state,
                status: STATUS.LOADING
            };

        case ACTION_TYPE.FETCH_GIFS_FULFILLED:
        case ACTION_TYPE.LOAD_MORE_GIFS_FULFILLED:
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

        case ACTION_TYPE.FETCH_GIFS_REJECTED:
        case ACTION_TYPE.LOAD_MORE_GIFS_REJECTED:
            return state;

        default:
            return state;
    }
};
