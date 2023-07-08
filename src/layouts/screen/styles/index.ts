import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import colors from '../../../utils/_colors';
import {Platform} from 'react-native';

export function screenViewStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: colors.background,
      position: 'relative',
    },
    containerContentStyle: {
      flex: 1,
    },
  });
}

export function screenHeaderDrawerStyles() {
  return ScaledSheet.create({
    drawerStyle: {
      backgroundColor: colors.background,
      width: '65%',
      marginTop: Platform.select({
        ios: moderateScale(125),
        default: moderateScale(50),
      }),
    },
    drawerOverlayStyle: {
      backgroundColor: 'transparent',
    },
  });
}
