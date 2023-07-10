// Imports
import {createReducer} from '../../helpers/createReducer';
import {handler} from './_handler';
import {initialState} from './_initialState';

// Helpers

export const authenticationReducer = createReducer(initialState, handler);
