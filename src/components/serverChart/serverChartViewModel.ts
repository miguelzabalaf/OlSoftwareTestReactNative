import {ServerchartProps} from './types';

export function useServerChartViewModel(
  props: ServerchartProps,
): ServerchartProps {
  return {
    ...props,
  };
}
