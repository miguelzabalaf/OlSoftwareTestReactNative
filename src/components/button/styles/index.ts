// Dependencies
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

// Utils
import {colors, spaces} from '../../../utils';
import {buttonViewStylesProps} from '../types';

export function buttonViewStyles(props: buttonViewStylesProps) {
  const {loading, disabled} = props;
  return ScaledSheet.create({
    containerStyle: {
      borderColor: colors.border,
      borderRadius: moderateScale(spaces.s4),
      paddingVertical: moderateScale(spaces.s16),
      paddingHorizontal: moderateScale(spaces.s30 + spaces.s10),
      opacity: disabled || loading ? 0.75 : 1,
      backgroundColor: colors.primay,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
    },
  });
}
