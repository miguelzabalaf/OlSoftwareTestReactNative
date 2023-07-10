import {TouchableOpacityProps} from 'react-native';
import {ScreenLayoutMethods} from '../../../layouts/screen/types';

export interface DrawerMenuRightInputProps
  extends Pick<ScreenLayoutMethods, 'handleCloseMenu'> {}

export interface DrawerMenuRightOutputProps extends DrawerMenuRightInputProps {
  menuItems: Array<MenuItem>;
}

export interface MenuItemOption {
  screen: string;
  title: string;
  icon: React.ReactNode;
  active: boolean;
}

export interface MenuItem {
  title: string;
  data: MenuItemOption[];
}

export interface DrawerMenuRightOptionProps
  extends MenuItemOption,
    TouchableOpacityProps {}

export interface DrawerMenuRightOptionViewProps
  extends Pick<MenuItemOption, 'active'> {}
