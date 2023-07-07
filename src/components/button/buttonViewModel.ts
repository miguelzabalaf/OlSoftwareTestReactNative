import {ButtonProps} from './types';

export function useButtonViewModel(props: ButtonProps): ButtonProps {
  return {
    ...props,
  };
}
