import {ParamListBase} from '@react-navigation/native';

export interface RootStackProps {}
export interface RootViewStackProps {
  isAuthenticated: boolean;
}

export type RootViewStackParamList = ParamListBase & {};
