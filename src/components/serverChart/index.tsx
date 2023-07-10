// Dependencies
import React from 'react';

// Screens
import ServerChartView from './serverChartView';

// Models
import {useServerChartViewModel} from './serverChartViewModel';

// Types
import {ServerchartProps} from './types';

function ServerChart(props: ServerchartProps): JSX.Element {
  const serverChartViewModelProps = useServerChartViewModel(props);
  return <ServerChartView {...serverChartViewModelProps} />;
}

export default ServerChart;
