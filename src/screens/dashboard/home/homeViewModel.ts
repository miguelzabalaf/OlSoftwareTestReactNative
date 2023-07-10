import {HomeScreenProps} from './types';

export function useHomeViewModel(props: HomeScreenProps) {
  return {
    ...props,
  };
}
