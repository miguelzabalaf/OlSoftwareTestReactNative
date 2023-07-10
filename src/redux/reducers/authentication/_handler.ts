// Dependecies
import {PayloadAction} from '@reduxjs/toolkit';

// Types
import {types} from './_types';
import {AuthenticationState, User} from './_interfaces';

export const handler = {
  [types.GET_USERS]: (
    state: AuthenticationState,
    action: PayloadAction<Array<User>>,
  ) => {
    const users = action.payload;
    return {
      ...state,
      users,
    };
  },
  [types.IS_AUTHENTICATED_CHANGE]: (
    state: AuthenticationState,
    action: PayloadAction<boolean>,
  ) => {
    const isAuthenticated = action.payload;
    return {
      ...state,
      isAuthenticated,
    };
  },
};
