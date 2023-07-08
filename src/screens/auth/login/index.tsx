// Dependencies
import React from 'react';

// Screens
import LoginView from './loginView';

// Models
import {useLoginViewModel} from './loginViewModel';

// Types
import {LoginScreenProps} from './types';

function LoginScreen(props: LoginScreenProps): JSX.Element {
  const loginViewModelProps = useLoginViewModel(props);
  return <LoginView {...loginViewModelProps} />;
}

export default LoginScreen;
