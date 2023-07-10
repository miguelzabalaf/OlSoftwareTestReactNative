// Entities
import {User} from '../reducers/authentication/_interfaces';

// Types
import {types} from '../reducers/authentication/_types';

export function authenticationActions() {
  return {
    setUsers(payload: Array<User>) {
      return {
        type: types.GET_USERS,
        payload,
      };
    },
    changeIsAuthenticated(payload: boolean) {
      return {
        type: types.IS_AUTHENTICATED_CHANGE,
        payload,
      };
    },
  };
}
