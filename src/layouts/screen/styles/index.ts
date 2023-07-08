import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../../utils/_colors';
import {Platform} from 'react-native';

export function screenViewStyles() {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      position: 'relative',
    },
  });
}

export function screenHeaderDrawerStyles() {
  return ScaledSheet.create({
    drawerStyle: {
      backgroundColor: colors.background,
      width: '65%',
      marginTop: Platform.select({ios: 100, default: 50}),
    },
    drawerOverlayStyle: {
      backgroundColor: 'transparent',
    },
  });
}
