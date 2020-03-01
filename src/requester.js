import {
    GIFS_TRENDING_URL,
    GIFS_SEARCH_URL,
    API_KEY,
    DEFAULT_LIMIT
} from './constants';

export const loadTrendingGifs = (offset = 0) => fetch(`${GIFS_TRENDING_URL}?api_key=${API_KEY}&limit=${DEFAULT_LIMIT}&offset=${offset}`)
    .then(response => response.json());

export const searchGifs = (query , offset = 0) => fetch(`${GIFS_SEARCH_URL}?api_key=${API_KEY}&q=${query}&limit=${DEFAULT_LIMIT}&offset=${offset}`)
    .then(response => response.json());
