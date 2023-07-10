// Dependencies
import {PropsWithChildren} from 'react';

// Types
import {} from 'react-native';

export interface TypographyProps extends PropsWithChildren {
  color?: string;
  size?: number;
  weight?: 'Regular' | 'Medium' | 'Bold';
  textStyles?: object;
  testIDVariant?: string;
}

export interface TypographyStylesProps
  extends Pick<TypographyProps, 'color' | 'size' | 'weight' | 'textStyles'> {}
