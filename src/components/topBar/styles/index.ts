// Dependencies
import {Platform} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {colors, spaces} from '../../../utils';

export function topBarViewStyles() {
  return ScaledSheet.create({
    containerStyle: {
      height: moderateScale(50),
      marginTop: Platform.select({ios: moderateScale(75), default: 0}),
      paddingHorizontal: spaces.s16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerLeftStyle: {},
    containerBadgeUserStyle: {
      width: moderateScale(40),
      height: moderateScale(40),
      borderRadius: moderateScale(20),
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBadgeUserStyle: {
      lineHeight: moderateScale(Platform.select({ios: 30, default: 45})),
    },
    containerRightStyle: {
      flexDirection: 'row',
      gap: spaces.s10,
    },
    containerButtonAction: {
      width: moderateScale(40),
      height: moderateScale(40),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(20),
    },
  });
}
