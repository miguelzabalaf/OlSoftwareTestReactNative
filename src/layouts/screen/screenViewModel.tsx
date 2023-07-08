import {useCallback, useState} from 'react';
import {ScreenLayoutOutputProps, ScreenLayoutInputProps} from './types';

export function useScreenViewModel(
  props: ScreenLayoutInputProps,
): ScreenLayoutOutputProps {
  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Methods
  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return {
    ...props,
    isMenuOpen,
    handleOpenMenu,
    handleCloseMenu,
  };
}
