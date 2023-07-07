// Dependencies
import {ScaledSheet} from 'react-native-size-matters';

// Types
import {TypographyStylesProps} from '../types';

export function typographyViewStyles(props: TypographyStylesProps) {
  const {color, size, weight, textStyles} = props;
  return ScaledSheet.create({
    textStyle: {
      color,
      fontSize: size,
      fontFamily: `Poppins-${weight}`,
      ...textStyles,
    },
  });
}
