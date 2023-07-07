// Dependencies
import React from 'react';

// Screens
import ScreenView from './screenView';

// Models
import {useScreenViewModel} from './screenViewModel';
import {ScreenLayoutProps} from './types';

function ScreenLayout(props: ScreenLayoutProps): JSX.Element {
  const loginViewModelProps = useScreenViewModel(props);
  return <ScreenView {...loginViewModelProps} />;
}

export default ScreenLayout;
