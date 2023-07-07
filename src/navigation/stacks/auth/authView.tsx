// Dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {screens} from '../../constants';

// Types
import {AuthViewStackParamList, AuthViewStackProps} from './types';
import {Text} from 'react-native';

// Options
import {defaultScreenOptions} from '../../options';

function View(props: AuthViewStackProps): JSX.Element {
  const {} = props;
  const AuthStack = createStackNavigator<AuthViewStackParamList>();
  return (
    <AuthStack.Navigator
      initialRouteName={screens.login}
      screenOptions={defaultScreenOptions()}>
      <AuthStack.Screen
        name={screens.login}
        component={() => <Text>HOLAOALOA</Text>}
      />
    </AuthStack.Navigator>
  );
}

export default View;
