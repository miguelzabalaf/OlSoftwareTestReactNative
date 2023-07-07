// Dependencies
import React from 'react';

// Components
import {Text} from 'react-native';

// Types
import {TypographyProps} from './types';

// Styles
import {typographyViewStyles} from './styles';

function TypographyView(props: TypographyProps): JSX.Element {
  const {children, ...typographyViewStylesProps} = props;
  const {textStyle} = typographyViewStyles(typographyViewStylesProps);

  return <Text style={textStyle}>{children}</Text>;
}

export default TypographyView;
