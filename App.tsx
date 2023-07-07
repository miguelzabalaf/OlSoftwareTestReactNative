// Dependencies
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Stacks
import RootStack from './src/navigation/stacks/root';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
