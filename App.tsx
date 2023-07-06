import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Env: {Config.ENV}</Text>
    </SafeAreaView>
  );
}

export default App;
