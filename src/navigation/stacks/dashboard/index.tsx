import React from 'react';
import {useDashboardViewModel} from './dashboardViewModel';
import DashboardView from './dashboardView';

function DashboardStack(): JSX.Element {
  const dashboardViewModelProps = useDashboardViewModel();
  return <DashboardView {...dashboardViewModelProps} />;
}

export default DashboardStack;
