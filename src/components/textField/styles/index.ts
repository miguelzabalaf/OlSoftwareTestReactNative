// Dependencies
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {colors, sizes, spaces} from '../../../utils';

export function textFieldViewStyles() {
  return ScaledSheet.create({
    containerStyle: {
      borderWidth: 2,
      borderColor: colors.border,
      height: moderateScale(50),
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: moderateScale(spaces.s20),
      marginBottom: moderateScale(spaces.s20),
    },
    inputStyle: {
      fontSize: moderateScale(sizes.medium),
      color: colors.text,
      fontFamily: 'Poppins-Regular',
      width: '100%',
      marginVertical: moderateScale(spaces.s10),
    },
  });
}
