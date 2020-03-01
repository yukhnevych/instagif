import { SET_SEARCH_QUERY } from '../actionTypes';

const initialState = {
    query: ''
};

export const searchReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case SET_SEARCH_QUERY:
            return {
                query: payload
            };

        default:
            return state;
    }
};
