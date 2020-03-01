import { combineReducers } from 'redux';
import { gifsReducer } from './gifs';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
    gifs: gifsReducer,
    search: searchReducer
});