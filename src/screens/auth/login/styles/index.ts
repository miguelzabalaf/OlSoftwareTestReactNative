// Dependencies
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

// Utils
import {colors, spaces} from '../../../../utils';

export function loginViewStyles() {
  return ScaledSheet.create({
    contentStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spaces.s16,
    },
    formContainerStyle: {
      height: moderateScale(400),
      width: '100%',
      backgroundColor: colors.white,
      borderRadius: moderateScale(5),
      paddingHorizontal: spaces.s26,
      paddingVertical: spaces.s30,
      shadowColor: colors.neutral,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 1,
      elevation: 1,
    },
    formImageStyle: {
      width: 200,
      height: 100,
      objectFit: 'contain',
      marginBottom: spaces.s30,
    },
  });
}
