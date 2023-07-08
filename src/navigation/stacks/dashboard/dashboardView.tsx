// Dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {screens} from '../../constants';

// Types
import {DashboardViewStackParamList, DashboardViewStackProps} from './types';

// Options
import {defaultScreenOptions} from '../../options';

// Screens
import HomeScreen from '../../../screens/dashboard/home';

function DashboardView(props: DashboardViewStackProps): JSX.Element {
  const {} = props;
  const DashboardStack = createStackNavigator<DashboardViewStackParamList>();
  return (
    <DashboardStack.Navigator
      initialRouteName={screens.home}
      screenOptions={defaultScreenOptions()}>
      <DashboardStack.Screen name={screens.home} component={HomeScreen} />
    </DashboardStack.Navigator>
  );
}

export default DashboardView;
