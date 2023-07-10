import React from 'react';
import {useRootViewModel} from './rootViewModel';
import RootView from './RootView';

function RootStack(): JSX.Element {
  const rootViewModelProps = useRootViewModel();
  return <RootView {...rootViewModelProps} />;
}

export default RootStack;
