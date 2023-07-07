import React from 'react';
import {authViewModel} from './authViewModel';
import AuthView from './authView';

function AuthStack(): JSX.Element {
  const authViewModelProps = authViewModel();
  return <AuthView {...authViewModelProps} />;
}

export default AuthStack;
