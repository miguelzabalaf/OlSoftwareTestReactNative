// Dependencies
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

// Utils
import {colors, spaces} from '../../../utils';
import {buttonViewStylesProps} from '../types';

export function buttonViewStyles(props: buttonViewStylesProps) {
  const {loading, disabled, small, backgroundColor, borderColor} = props;
  return ScaledSheet.create({
    containerStyle: {
      borderWidth: borderColor ? moderateScale(1) : 0,
      borderColor: borderColor ?? 'transparent',
      borderRadius: moderateScale(spaces.s4),
      paddingVertical: small
        ? moderateScale(spaces.s4)
        : moderateScale(spaces.s16),
      paddingHorizontal: small
        ? moderateScale(spaces.s10)
        : moderateScale(spaces.s30 + spaces.s10),
      opacity: disabled || loading ? 0.75 : 1,
      backgroundColor: backgroundColor ?? colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      gap: moderateScale(spaces.s6),
    },
  });
}
