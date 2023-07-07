// Dependencies
import React from 'react';

// Components
import {Image, View} from 'react-native';
import ScreenLayout from '../../../layouts/screen';
import Typography from '../../../components/typography';

// Types
import {LoginScreenProps} from './types';

// Styles
import {loginViewStyles} from './styles';

// Utils
import {colors, sizes} from '../../../utils';

function LoginView(props: LoginScreenProps): JSX.Element {
  const {} = props;
  const {formContainerStyle, contentStyle, formImageStyle} = loginViewStyles();
  return (
    <ScreenLayout>
      <View style={contentStyle}>
        <View style={formContainerStyle}>
          <Image
            style={formImageStyle}
            source={require('../../../../assets/images/logo.png')}
          />
          <Typography size={sizes.normal} weight="Medium" color={colors.black}>
            {'Hola! Bienvenido a OL Software'}
          </Typography>
        </View>
      </View>
    </ScreenLayout>
  );
}

export default LoginView;
