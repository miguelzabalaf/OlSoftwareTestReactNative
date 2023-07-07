// Dependencies
import React from 'react';

// Components
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Typography from '../typography';

// Utils
import {colors, sizes} from '../../utils';

// Types
import {ButtonProps} from './types';

// Styles
import {buttonViewStyles} from './styles';

function Button(props: ButtonProps): JSX.Element {
  const {children, loading, testIDVariant} = props;
  const {containerStyle} = buttonViewStyles({loading});
  return (
    <TouchableOpacity
      testID={testIDVariant ?? 'ButtonTestID'}
      style={containerStyle}
      activeOpacity={0.9}
      disabled={loading}
      {...props}>
      {loading ? (
        <ActivityIndicator
          testID={'ButtonActivityIndicatorTestID'}
          color={colors.white}
        />
      ) : (
        <Typography color={colors.white} weight={'Medium'} size={sizes.medium}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

export default Button;
