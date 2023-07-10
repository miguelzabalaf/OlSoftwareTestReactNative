// Dependencies
import React from 'react';

// Screens
import HomeView from './homeView';

// Models
import {useHomeViewModel} from './homeViewModel';
import {HomeScreenProps} from './types';

function HomeScreen(props: HomeScreenProps): JSX.Element {
  const homeViewModelProps = useHomeViewModel(props);
  return <HomeView {...homeViewModelProps} />;
}

export default HomeScreen;
