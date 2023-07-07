import React from 'react';
import {authViewModel} from './authViewModel';
import View from './authView';

function AuthStack(): JSX.Element {
  const props = authViewModel();
  return <View {...props} />;
}

export default AuthStack;
