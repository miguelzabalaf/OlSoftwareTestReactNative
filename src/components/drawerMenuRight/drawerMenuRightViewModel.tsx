import React, {useEffect, useState} from 'react';
import Icon from '../icon';
import {
  DrawerMenuRightInputProps,
  DrawerMenuRightOutputProps,
  MenuItem,
} from './types';
import {useRoute} from '@react-navigation/native';
import {screens} from '../../navigation/constants';
import {colors} from '../../utils';

export function useDrawerMenuRightViewModel(
  props: DrawerMenuRightInputProps,
): DrawerMenuRightOutputProps {
  // Hooks
  const {name: currentScreen} = useRoute();

  // Methods
  const getIconColorBy = (screen: string): string => {
    return screen === currentScreen ? colors.primay : colors.black;
  };

  // States
  const menuItemsInitialState: Array<MenuItem> = [
    {
      title: '',
      data: [
        {
          screen: screens.home,
          title: 'Dashboard',
          icon: (
            <Icon.Dashboard scale={0.5} color={getIconColorBy(screens.home)} />
          ),
          active: false,
        },
      ],
    },
    {
      title: 'Proyectos',
      data: [
        {
          screen: 'projectListScreen',
          title: 'Lista de proyectos',
          icon: <Icon.List scale={0.5} color={getIconColorBy('')} />,
          active: false,
        },
      ],
    },
    {
      title: 'Usuarios',
      data: [
        {
          screen: 'userListScreen',
          title: 'Lista de usuarios',
          icon: <Icon.User scale={0.5} color={getIconColorBy('')} />,
          active: false,
        },
      ],
    },
    {
      title: 'Roles',
      data: [
        {
          screen: 'rolesAdministratorScreen',
          title: 'Administrar roles',
          icon: <Icon.Layer scale={0.5} color={getIconColorBy('')} />,
          active: false,
        },
      ],
    },
  ];
  const [menuItems, setmenuItems] = useState<Array<MenuItem>>(
    menuItemsInitialState,
  );

  useEffect(() => {
    const newMenuItems = menuItemsInitialState.map(item => {
      const newItem = {...item};
      newItem.data = item.data.map(subItem => {
        const newSubItem = {...subItem};
        newSubItem.active = subItem.screen === currentScreen;
        return newSubItem;
      });
      return newItem;
    });
    setmenuItems(newMenuItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...props,
    menuItems,
  };
}
