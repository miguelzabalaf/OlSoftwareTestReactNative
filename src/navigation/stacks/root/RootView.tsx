// Dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {stacks} from '../../constants';

// Types
import {RootViewStackParamList, RootViewStackProps} from './types';

// Stacks
import AuthStack from '../auth';
import DashboardStack from '../dashboard';

// Options
import {defaultScreenOptions} from '../../options';

function RootView(props: RootViewStackProps): JSX.Element {
  const {isAuthenticated} = props;
  const RootStack = createStackNavigator<RootViewStackParamList>();
  return (
    <RootStack.Navigator
      initialRouteName={stacks.auth}
      screenOptions={defaultScreenOptions()}>
      {isAuthenticated ? (
        <RootStack.Screen name={stacks.dashboard} component={DashboardStack} />
      ) : (
        <RootStack.Screen name={stacks.auth} component={AuthStack} />
      )}
    </RootStack.Navigator>
  );
}

export default RootView;
