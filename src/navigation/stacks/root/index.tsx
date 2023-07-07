import React from 'react';
import {rootViewModel} from './rootViewModel';
import RootView from './RootView';

function RootStack(): JSX.Element {
  const rootViewModelProps = rootViewModel();
  return <RootView {...rootViewModelProps} />;
}

export default RootStack;
