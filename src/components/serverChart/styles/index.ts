// Dependencies
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils';

export function serverChartViewStyles() {
  return ScaledSheet.create({
    victoryLabelStyle: {
      fontSize: 10,
      fill: colors.text,
    },
  });
}
