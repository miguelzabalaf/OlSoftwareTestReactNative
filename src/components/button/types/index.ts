import {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends PropsWithChildren, TouchableOpacityProps {
  loading?: boolean;
  disabled?: boolean;
  testIDVariant?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  Icon?: JSX.Element;
  small?: boolean;
}

export interface buttonViewStylesProps
  extends Pick<
    ButtonProps,
    'loading' | 'disabled' | 'backgroundColor' | 'borderColor' | 'small'
  > {}
