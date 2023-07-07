// Dependencies:
import React from 'react';

// Types
import {ScreenLayoutProps} from './types';
// Components
import {View} from 'react-native';

// Styles
import {screenViewStyles} from './styles';

function ScreenView(props: ScreenLayoutProps): JSX.Element {
  const {children} = props;
  const {container} = screenViewStyles();
  return <View style={container}>{children}</View>;
}

export default ScreenView;
