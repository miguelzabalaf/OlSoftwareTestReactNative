// Dependencies
import React from 'react';

// Screens
import TypographyView from './typographyView';

// Models
import {useTypographyViewModel} from './typographyViewModel';
import {TypographyProps} from './types';

function Typography(props: TypographyProps): JSX.Element {
  const TypographyViewModelProps = useTypographyViewModel(props);
  return <TypographyView {...TypographyViewModelProps} />;
}

export default Typography;
