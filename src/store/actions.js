import { ACTION_TYPE } from '../constants';
import { loadTrendingGifs, searchGifs } from '../requester';

export const fetchGifs = search => ({
    type: ACTION_TYPE.FETCH_GIFS,
    payload: search
        ? searchGifs(search)
        : loadTrendingGifs()
});

export const loadMoreGifs = (search, offset) => ({
    type: ACTION_TYPE.LOAD_MORE_GIFS,
    payload: search
        ? searchGifs(search, offset)
        : loadTrendingGifs(offset)
});

export const setSearchQuery = query => ({
    type: ACTION_TYPE.SET_SEARCH_QUERY,
    payload: query
});
