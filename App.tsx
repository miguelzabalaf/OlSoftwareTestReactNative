// Dependencies
import React from 'react';

// Stacks
import RootStack from './src/navigation/stacks/root';

// Store
import {persistor, store} from './src/redux/store';

// Components
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {useInterceptor} from './src/config/interceptor';

function App(): JSX.Element {
  useInterceptor(store);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<ActivityIndicator />}>
          <RootStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
