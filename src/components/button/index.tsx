// Dependencies
import React from 'react';

// Screens
import ButtonView from './buttonView';

// Models
import {useButtonViewModel} from './buttonViewModel';

// Types
import {ButtonProps} from './types';

function Button(props: ButtonProps): JSX.Element {
  const buttonViewModelProps = useButtonViewModel(props);
  return <ButtonView {...buttonViewModelProps} />;
}

export default Button;
