import { ACTION_TYPE } from '../../constants';

const initialState = {
    query: ''
};

export const searchReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ACTION_TYPE.SET_SEARCH_QUERY:
            return {
                query: payload
            };

        default:
            return state;
    }
};
