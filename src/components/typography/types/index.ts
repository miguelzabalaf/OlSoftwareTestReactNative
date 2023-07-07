// Dependencies
import {PropsWithChildren} from 'react';

// Types
import {StyleProp, TextStyle} from 'react-native';

export interface TypographyProps extends PropsWithChildren {
  color?: string;
  size?: number;
  weight?: 'Regular' | 'Medium' | 'Bold';
  textStyles?: StyleProp<TextStyle>;
  testIDVariant?: string;
}

export interface TypographyStylesProps
  extends Pick<TypographyProps, 'color' | 'size' | 'weight' | 'textStyles'> {}
