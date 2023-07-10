import {useSelector} from 'react-redux';
import {authenticationSelectors} from '../../../redux/selectors/authentication';
import {RootViewStackProps} from './types';

export function useRootViewModel(): RootViewStackProps {
  // Selectors
  const {isAuthenticatedSelector} = authenticationSelectors();
  const isAuthenticated = useSelector(isAuthenticatedSelector());
  return {
    isAuthenticated,
  };
}
