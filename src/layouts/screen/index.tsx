// Dependencies
import React from 'react';

// Screens
import ScreenView from './screenView';

// Models
import {useScreenViewModel} from './screenViewModel';
import {ScreenLayoutInputProps} from './types';

function ScreenLayout(props: ScreenLayoutInputProps): JSX.Element {
  const loginViewModelProps = useScreenViewModel(props);
  return <ScreenView {...loginViewModelProps} />;
}

export default ScreenLayout;
