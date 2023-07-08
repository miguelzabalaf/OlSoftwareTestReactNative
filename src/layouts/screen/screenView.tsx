// Dependencies:
import React from 'react';

// Types
import {ScreenLayoutOutputProps} from './types';
// Components
import {View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';

// Styles
import {screenHeaderDrawerStyles, screenViewStyles} from './styles';
import DrawerMenuRight from '../../components/drawerMenuRight';

function ScreenView(props: ScreenLayoutOutputProps): JSX.Element {
  const {children, headerShown, isMenuOpen, handleOpenMenu, handleCloseMenu} =
    props;
  const {container} = screenViewStyles();
  const {drawerStyle, drawerOverlayStyle} = screenHeaderDrawerStyles();
  return (
    <View style={container}>
      {headerShown && (
        <Drawer
          drawerPosition="right"
          drawerType="front"
          overlayStyle={drawerOverlayStyle}
          drawerStyle={drawerStyle}
          open={isMenuOpen}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          renderDrawerContent={() => {
            return <DrawerMenuRight handleCloseMenu={handleCloseMenu} />;
          }}>
          {children}
        </Drawer>
      )}
    </View>
  );
}

export default ScreenView;
