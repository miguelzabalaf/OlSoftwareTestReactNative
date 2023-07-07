// Dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {drawers, stacks} from '../../constants';

// Types
import {RootViewStackParamList, RootViewStackProps} from './types';

// Stacks
import AuthStack from '../auth';

// Options
import {defaultScreenOptions} from '../../options';

function RootView(props: RootViewStackProps): JSX.Element {
  const {} = props;
  const RootStack = createStackNavigator<RootViewStackParamList>();
  return (
    <RootStack.Navigator
      initialRouteName={stacks.auth}
      screenOptions={defaultScreenOptions()}>
      <RootStack.Screen name={stacks.auth} component={AuthStack} />
      <RootStack.Screen name={drawers.home} component={() => null} />
    </RootStack.Navigator>
  );
}

export default RootView;
