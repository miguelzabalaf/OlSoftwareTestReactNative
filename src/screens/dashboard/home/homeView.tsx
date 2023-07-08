// Dependencies
import React from 'react';

// Components
import {Text, View} from 'react-native';
import ScreenLayout from '../../../layouts/screen';

// Types
import {HomeScreenProps} from './types';

function HomeView(props: HomeScreenProps): JSX.Element {
  const {} = props;
  return (
    <ScreenLayout headerShown>
      <View>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
      </View>
    </ScreenLayout>
  );
}

export default HomeView;
