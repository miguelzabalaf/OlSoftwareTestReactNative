// Dependencies
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

// Utils
import {colors, spaces} from '../../../../utils';
import {Platform} from 'react-native';

export function homeViewStyles() {
  return ScaledSheet.create({
    containerContentStyle: {
      marginTop: moderateScale(spaces.s16),
      marginHorizontal: moderateScale(spaces.s16),
    },
    continerTopActionsStyle: {
      flexDirection: 'row',
      gap: moderateScale(spaces.s10),
    },
    lineSeparatorStyle: {
      borderWidth: 0.5,
      borderColor: colors.neutral,
      marginVertical: moderateScale(spaces.s16),
    },
    containerStadisticsStyle: {
      flexDirection: 'row',
      gap: moderateScale(spaces.s16),
      justifyContent: 'space-between',
      marginBottom: moderateScale(spaces.s30),
    },
    containerStadisticItemStyle: {
      alignItems: 'center',
      gap: moderateScale(
        Platform.select({ios: spaces.s10, default: spaces.s4}),
      ),
    },
    // Card
    cardContainerStyle: {
      width: '100%',
      height: 'auto',
      backgroundColor: colors.white,
      borderRadius: moderateScale(spaces.s16),
      padding: moderateScale(spaces.s16),
      gap: moderateScale(spaces.s8),
    },
    graphycFlagsStyle: {
      flexDirection: 'row',
      gap: moderateScale(spaces.s16),
    },
    flagContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: moderateScale(spaces.s6),
    },
    badgeStyle: {
      width: moderateScale(10),
      height: moderateScale(10),
      borderRadius: moderateScale(10),
      backgroundColor: colors.primary,
    },
  });
}
