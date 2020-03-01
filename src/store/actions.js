import { FETCH_GIFS, LOAD_MORE_GIFS, SET_SEARCH_QUERY } from './actionTypes';
import { loadTrendingGifs, searchGifs } from '../requester';

export const fetchGifs = search => ({
    type: FETCH_GIFS,
    payload: search
        ? searchGifs(search)
        : loadTrendingGifs()
});

export const loadMoreGifs = (search, offset) => ({
    type: LOAD_MORE_GIFS,
    payload: search
        ? searchGifs(search, offset)
        : loadTrendingGifs(offset)
});

export const setSearchQuery = query => ({
    type: SET_SEARCH_QUERY,
    payload: query
});
