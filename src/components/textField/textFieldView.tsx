// Dependencies
import React from 'react';

// Components
import {TextInput, View} from 'react-native';
import {TextFieldProps} from './types';
import {textFieldViewStyles} from './styles';
import {colors} from '../../utils';

function TextFieldView(props: TextFieldProps) {
  const {onChangeText, value, placeholder, ...rest} = props;
  const {containerStyle, inputStyle} = textFieldViewStyles();
  return (
    <View style={containerStyle}>
      <TextInput
        {...rest}
        style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
}

export default TextFieldView;
