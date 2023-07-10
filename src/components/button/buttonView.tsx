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

function ButtonView(props: ButtonProps): JSX.Element {
  const {
    children,
    loading,
    testIDVariant,
    backgroundColor,
    borderColor,
    Icon,
    small,
    textColor,
    disabled,
  } = props;
  const {containerStyle} = buttonViewStyles({
    loading,
    backgroundColor,
    borderColor,
    small,
    disabled,
  });
  return (
    <TouchableOpacity
      testID={testIDVariant ?? 'ButtonTestID'}
      style={containerStyle}
      activeOpacity={0.9}
      disabled={disabled}
      {...props}>
      {loading ? (
        <ActivityIndicator
          testID={'ButtonActivityIndicatorTestID'}
          color={colors.white}
        />
      ) : (
        <>
          {Icon}
          <Typography
            testIDVariant={'ButtonTestIDTypography'}
            color={textColor ?? colors.white}
            weight={'Medium'}
            size={small ? sizes.small : sizes.medium}>
            {children}
          </Typography>
        </>
      )}
    </TouchableOpacity>
  );
}

export default ButtonView;
