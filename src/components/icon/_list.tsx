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
        d="M14.5 1C14.7761 1 15 1.22386 15 1.5V10.5C15 10.7761 14.7761 11 14.5 11H1.5C1.22386 11 1 10.7761 1 10.5V1.5C1 1.22386 1.22386 1 1.5 1H14.5ZM1.5 0C0.671573 0 0 0.671573 0 1.5V10.5C0 11.3284 0.671573 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V1.5C16 0.671573 15.3284 0 14.5 0H1.5Z"
        fill={color ?? colors.black}
      />
      <Path
        d="M3 3.5C3 3.22386 3.22386 3 3.5 3H12.5C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H3.5C3.22386 4 3 3.77614 3 3.5ZM3 6C3 5.72386 3.22386 5.5 3.5 5.5H12.5C12.7761 5.5 13 5.72386 13 6C13 6.27614 12.7761 6.5 12.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6ZM3 8.5C3 8.22386 3.22386 8 3.5 8H9.5C9.77614 8 10 8.22386 10 8.5C10 8.77614 9.77614 9 9.5 9H3.5C3.22386 9 3 8.77614 3 8.5Z"
        fill={color ?? colors.black}
      />
    </Svg>
  );
}
