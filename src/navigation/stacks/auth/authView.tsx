// Dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {screens} from '../../constants';

// Types
import {AuthViewStackParamList, AuthViewStackProps} from './types';

// Options
import {defaultScreenOptions} from '../../options';

// Screens
import LoginScreen from '../../../screens/auth/login';

function AuthView(props: AuthViewStackProps): JSX.Element {
  const {} = props;
  const AuthStack = createStackNavigator<AuthViewStackParamList>();
  return (
    <AuthStack.Navigator
      initialRouteName={screens.login}
      screenOptions={defaultScreenOptions()}>
      <AuthStack.Screen name={screens.login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthView;
