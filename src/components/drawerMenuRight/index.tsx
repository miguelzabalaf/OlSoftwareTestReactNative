// Dependencies
import React from 'react';

// Screens
import DrawerMenuRightView from './drawerMenuRightView';

// Models
import {useDrawerMenuRightViewModel} from './drawerMenuRightViewModel';

// Types
import {DrawerMenuRightInputProps} from './types';

function DrawerMenuRight(props: DrawerMenuRightInputProps): JSX.Element {
  const DrawerMenuRightViewModelProps = useDrawerMenuRightViewModel(props);
  return <DrawerMenuRightView {...DrawerMenuRightViewModelProps} />;
}

export default DrawerMenuRight;
