// Dependencies:
import React from 'react';

// Types
import {ScreenLayoutOutputProps} from './types';
// Components
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';

// Styles
import {screenHeaderDrawerStyles, screenViewStyles} from './styles';
import DrawerMenuRight from '../../components/drawerMenuRight';
import TopBar from '../../components/topBar';

function ScreenView(props: ScreenLayoutOutputProps): JSX.Element {
  const {
    children,
    headerShown,
    isMenuOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleToggleMenu,
  } = props;
  const {containerStyle, containerContentStyle} = screenViewStyles();
  const {drawerStyle, drawerOverlayStyle} = screenHeaderDrawerStyles();
  return (
    <View style={containerStyle}>
      <KeyboardAvoidingView
        style={containerContentStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        {headerShown ? (
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
            <TopBar handleToggleMenu={handleToggleMenu} />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              {children}
            </ScrollView>
          </Drawer>
        ) : (
          children
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

export default ScreenView;
