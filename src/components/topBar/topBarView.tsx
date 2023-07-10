// Dependencies
import React from 'react';

// Components
import {TouchableOpacity, View} from 'react-native';
import Typography from '../typography';

// Types
import {TopBarProps} from './types';

// Styles
import {topBarViewStyles} from './styles';
import {colors, sizes} from '../../utils';
import Icon from '../icon';

function TopBarView(props: TopBarProps): JSX.Element {
  const {handleToggleMenu} = props;
  const {
    containerStyle,
    containerLeftStyle,
    containerBadgeUserStyle,
    textBadgeUserStyle,
    containerRightStyle,
    containerButtonAction,
  } = topBarViewStyles();
  return (
    <View style={containerStyle}>
      <View style={containerLeftStyle}>
        <View style={containerBadgeUserStyle}>
          <Typography
            weight="Bold"
            color={colors.white}
            size={sizes.large}
            textStyles={textBadgeUserStyle}>
            A
          </Typography>
        </View>
      </View>
      <View style={containerRightStyle}>
        <TouchableOpacity activeOpacity={0.9} style={containerButtonAction}>
          <Icon.Notification scale={0.7} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={containerButtonAction}
          onPress={handleToggleMenu}>
          <Icon.List scale={0.7} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopBarView;
