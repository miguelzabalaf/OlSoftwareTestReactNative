// Dependencies
import React from 'react';

// Screens
import TextFieldView from './textFieldView';

// Models
import {useTextFieldViewModel} from './textFieldViewModel';
import {TextFieldProps} from './types';

function TextField(props: TextFieldProps): JSX.Element {
  const TextFieldViewModelProps = useTextFieldViewModel(props);
  return <TextFieldView {...TextFieldViewModelProps} />;
}

export default TextField;
