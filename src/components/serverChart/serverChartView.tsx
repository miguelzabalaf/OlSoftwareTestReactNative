// Dependencies
import React from 'react';

// Components
import {View, Dimensions} from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryScatter,
  VictoryArea,
  VictoryLegend,
} from 'victory-native';

// Utils
import {colors} from '../../utils';

// Types
import {ServerchartProps} from './types';

// Styles
import {serverChartViewStyles} from './styles';

function ServerChartView(props: ServerchartProps): JSX.Element {
  const {weekData, pastWeekData} = props;
  const {victoryLabelStyle} = serverChartViewStyles();
  return (
    <View>
      <VictoryChart
        style={{parent: {overflow: 'hidden'}}}
        scale={{x: 'time', y: 'linear'}}
        width={Dimensions.get('screen').width - 95}
        padding={{
          bottom: 70,
          top: 60,
          left: 40,
        }}
        categories={{
          y: ['0', '100', '200', '300'],
          x: [
            '27/07/2022',
            '29/07/2022',
            '31/07/2022',
            '02/08/2022',
            '04/08/2022',
          ],
        }}
        height={235}>
        <VictoryLegend
          orientation="horizontal"
          gutter={24}
          data={[
            {
              name: 'Semana',
              symbol: {fill: colors.primary},
              labels: {fill: colors.textMuted},
            },
            {
              name: 'Semana Anterior',
              symbol: {fill: colors.tertiary},
              labels: {fill: colors.textMuted},
            },
          ]}
          labelComponent={<VictoryLabel className="text-xs" />}
        />

        <VictoryLine
          name={'line'}
          interpolation={'monotoneX'}
          style={{
            data: {
              stroke: colors.primary,
              opacity: 1,
            },
          }}
          data={weekData}
        />
        <VictoryLine
          name={'line'}
          interpolation={'monotoneX'}
          style={{
            data: {
              stroke: colors.tertiary,
              opacity: 1,
            },
          }}
          data={pastWeekData}
        />
        <VictoryScatter
          data={pastWeekData}
          size={5}
          style={{data: {fill: colors.tertiary}}}
        />
        <VictoryScatter
          data={weekData}
          size={5}
          style={{data: {fill: colors.primary}}}
        />
        <VictoryArea
          interpolation={'monotoneX'}
          style={{
            data: {fill: colors.primary, opacity: 0.1},
          }}
          data={weekData}
        />
        <VictoryArea
          interpolation={'monotoneX'}
          style={{
            data: {fill: colors.tertiary, opacity: 0.1},
          }}
          data={pastWeekData}
        />

        <VictoryAxis
          tickValues={['0', '100', '200', '300']}
          dependentAxis
          style={{
            tickLabels: {fill: colors.text, fontSize: 10},
          }}
        />
        {[
          '27/07/2022',
          '29/07/2022',
          '31/07/2022',
          '02/08/2022',
          '04/08/2022',
        ].map((d, i) => {
          return (
            <VictoryAxis
              tickValues={['0', '100', '200', '300']}
              dependentAxis
              key={i}
              label={d}
              style={{
                tickLabels: {fill: 'none'},
                grid: {stroke: colors.neutral},
                axis: {stroke: 'none'},
              }}
              axisValue={d}
              axisLabelComponent={
                <VictoryLabel
                  dy={60}
                  dx={-50}
                  angle={-45}
                  style={victoryLabelStyle as React.CSSProperties}
                />
              }
            />
          );
        })}
      </VictoryChart>
    </View>
  );
}

export default ServerChartView;
