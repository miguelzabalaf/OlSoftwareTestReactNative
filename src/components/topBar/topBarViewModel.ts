import {TopBarProps} from './types';

export function useTopBarViewModel(props: TopBarProps): TopBarProps {
  return {
    ...props,
  };
}
