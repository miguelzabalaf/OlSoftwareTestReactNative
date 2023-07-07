import {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends PropsWithChildren, TouchableOpacityProps {
  loading?: boolean;
  disabled?: boolean;
  testIDVariant?: string;
}

export interface buttonViewStylesProps
  extends Pick<ButtonProps, 'loading' | 'disabled'> {}
