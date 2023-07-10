import {useDispatch} from './../../../../node_modules/react-redux/src/hooks/useDispatch';
import {useMemo, useState} from 'react';
import {LoginScreenProps, LoginViewProps} from './types';
import {authenticationActions} from '../../../redux/actions/authentication';

export function useLoginViewModel(props: LoginScreenProps): LoginViewProps {
  // Actions
  const dispatch = useDispatch();
  const {changeIsAuthenticated} = authenticationActions();

  // States
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  // Methods
  function onEmailChange(email: string) {
    setUserCredentials({...userCredentials, email});
  }

  function onPasswordChange(password: string) {
    setUserCredentials({...userCredentials, password});
  }

  function onLogin() {
    dispatch(changeIsAuthenticated(true));
  }

  const onLoginDisabled = useMemo(() => {
    return !userCredentials.email || !userCredentials.password;
  }, [userCredentials]);

  return {
    ...props,
    userCredentials,
    onEmailChange,
    onPasswordChange,
    onLogin,
    onLoginDisabled,
  };
}
