// Dependencies
import React from 'react';

// Screens
import LoginView from './loginView';

// Models
import {loginViewModel} from './loginViewModel';

function LoginScreen(): JSX.Element {
  const loginViewModelProps = loginViewModel();
  return <LoginView {...loginViewModelProps} />;
}

export default LoginScreen;
