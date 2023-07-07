import {ScreenLayoutProps} from './types';

export function useScreenViewModel(props: ScreenLayoutProps) {
  return {
    ...props,
  };
}
