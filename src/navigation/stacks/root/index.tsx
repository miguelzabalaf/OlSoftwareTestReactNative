import React from 'react';
import {rootViewModel} from './rootViewModel';
import View from './RootView';

function RootStack(): JSX.Element {
  const props = rootViewModel();
  return <View {...props} />;
}

export default RootStack;
