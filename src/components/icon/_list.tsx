import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {colors} from '../../utils';

export function List(props: SvgProps): JSX.Element {
  const {color, style, scale = 1} = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
        fill="black"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H13C13.2761 7.5 13.5 7.72386 13.5 8C13.5 8.27614 13.2761 8.5 13 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8Z"
        fill={color ?? colors.black}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H13C13.2761 3.5 13.5 3.72386 13.5 4C13.5 4.27614 13.2761 4.5 13 4.5H3C2.72386 4.5 2.5 4.27614 2.5 4Z"
        fill={color ?? colors.black}
      />
    </Svg>
  );
}
