// Dependencies
import {ScaledSheet} from 'react-native-size-matters';
import {colors, spaces} from '../../../utils';
import {DrawerMenuRightOptionViewProps} from '../types';

export function DrawerMenuRightViewStyles() {
  return ScaledSheet.create({
    containerStyle: {},
  });
}

export function DrawerMenuRightViewSectionHeaderStyles() {
  return ScaledSheet.create({
    textHeaderStyle: {
      marginLeft: spaces.s30,
      textTransform: 'uppercase',
      marginBottom: spaces.s10,
    },
  });
}

export function DrawerMenuRightOptionViewStyles(
  props: DrawerMenuRightOptionViewProps,
) {
  const {active} = props;
  return ScaledSheet.create({
    itemContainerStyle: {
      paddingHorizontal: spaces.s30 + spaces.s4,
      paddingVertical: spaces.s16,
      marginBottom: spaces.s20,
      backgroundColor: active ? colors.white : 'transparent',
      flexDirection: 'row',
      gap: spaces.s16,
    },
  });
}
