// Dependencies
import React from 'react';

// Screens
import LoginView from './loginView';

// Models
import {useLoginViewModel} from './loginViewModel';

function LoginScreen(): JSX.Element {
  const loginViewModelProps = useLoginViewModel();
  return <LoginView {...loginViewModelProps} />;
}

export default LoginScreen;
