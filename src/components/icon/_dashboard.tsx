import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {colors} from '../../utils';

export function Dashboard(props: SvgProps): JSX.Element {
  const {color, style, scale = 1} = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      style={style}>
      <Path
        d="M0 0H16V16H0V0ZM1 1V7.5H7.5V1H1ZM8.5 1V7.5H15V1H8.5ZM15 8.5H8.5V15H15V8.5ZM7.5 15V8.5H1V15H7.5Z"
        fill={color ?? colors.black}
      />
    </Svg>
  );
}
