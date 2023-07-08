// Dependencies
import React from 'react';

// Components
import {SectionList, TouchableOpacity, View} from 'react-native';
import Typography from '../typography';

// Types
import {DrawerMenuRightOptionProps, DrawerMenuRightOutputProps} from './types';

// Utils
import {colors, sizes} from '../../utils';

// Styles
import {
  DrawerMenuRightOptionViewStyles,
  DrawerMenuRightViewSectionHeaderStyles,
} from './styles';

function DrawerMenuRightOptionView(
  props: DrawerMenuRightOptionProps,
): JSX.Element {
  const {active, icon, title, onPress} = props;
  const {itemContainerStyle} = DrawerMenuRightOptionViewStyles({active});

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={itemContainerStyle}>
      <View>{icon}</View>
      <Typography
        weight="Regular"
        color={active ? colors.primay : colors.text}
        size={sizes.small}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
}

function DrawerMenuRight(props: DrawerMenuRightOutputProps): JSX.Element {
  const {menuItems, handleCloseMenu} = props;
  const {textHeaderStyle} = DrawerMenuRightViewSectionHeaderStyles();
  return (
    <View>
      <SectionList
        sections={menuItems}
        keyExtractor={item => item.screen}
        renderItem={({item}) => {
          return (
            <DrawerMenuRightOptionView {...item} onPress={handleCloseMenu} />
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Typography
            textStyles={textHeaderStyle}
            weight="Medium"
            color="black"
            size={sizes.small}>
            {title}
          </Typography>
        )}
      />
    </View>
  );
}

export default DrawerMenuRight;
