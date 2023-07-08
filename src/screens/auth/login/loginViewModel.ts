import {LoginScreenProps} from './types';

export function useLoginViewModel(props: LoginScreenProps) {
  return {
    ...props,
  };
}
