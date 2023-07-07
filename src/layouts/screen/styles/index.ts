import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../../utils/_colors';

export function screenViewStyles() {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      position: 'relative',
    },
  });
}
