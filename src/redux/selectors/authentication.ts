// Helpers
import {createSelector} from '../helpers/createSelector';
import {ReduxStore} from '../store';

export function authenticationSelectors() {
  return {
    getUsersSelector() {
      return createSelector(
        (state: ReduxStore) => state.authentication,
        authentication => authentication.users,
      );
    },
    isAuthenticatedSelector() {
      return createSelector(
        (state: ReduxStore) => state.authentication,
        authentication => authentication.isAuthenticated,
      );
    },
  };
}
