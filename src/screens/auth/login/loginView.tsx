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
import TextField from '../../../components/textField';
import Button from '../../../components/button';

function LoginView(props: LoginScreenProps): JSX.Element {
  const {} = props;
  const {
    formContainerStyle,
    contentStyle,
    formImageStyle,
    formGreetContainerStyle,
  } = loginViewStyles();
  return (
    <ScreenLayout>
      <View style={contentStyle}>
        <View style={formContainerStyle}>
          <Image
            style={formImageStyle}
            source={require('../../../../assets/images/logo.png')}
          />
          <View style={formGreetContainerStyle}>
            <Typography
              size={sizes.normal}
              weight="Regular"
              color={colors.black}>
              {'Hola! Bienvenido a OL Software'}
            </Typography>
          </View>
          <TextField placeholder={'Correo'} />
          <TextField placeholder={'Contraseña'} secureTextEntry />
          <Button>{'Ingresar'}</Button>
        </View>
      </View>
    </ScreenLayout>
  );
}

export default LoginView;
