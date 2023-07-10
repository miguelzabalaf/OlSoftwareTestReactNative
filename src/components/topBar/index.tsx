// Dependencies
import React from 'react';

// Screens
import TopBarView from './topBarView';

// Models
import {useTopBarViewModel} from './topBarViewModel';

// Types
import {TopBarProps} from './types';

function TopBar(props: TopBarProps): JSX.Element {
  const topBarViewModelProps = useTopBarViewModel(props);
  return <TopBarView {...topBarViewModelProps} />;
}

export default TopBar;
