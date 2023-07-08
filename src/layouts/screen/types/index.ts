import {PropsWithChildren} from 'react';

export interface ScreenLayoutMethods {
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

export interface ScreenLayoutStates {
  isMenuOpen: boolean;
}

export interface ScreenLayoutInputProps extends PropsWithChildren {
  headerShown?: boolean;
}

export interface ScreenLayoutOutputProps
  extends ScreenLayoutInputProps,
    ScreenLayoutMethods,
    ScreenLayoutStates {}
