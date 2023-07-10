// Dependencies
import React from 'react';

// Components
import {Image, View} from 'react-native';
import ScreenLayout from '../../../layouts/screen';
import Typography from '../../../components/typography';

// Types
import {LoginViewProps} from './types';

// Styles
import {loginViewStyles} from './styles';

// Utils
import {colors, sizes} from '../../../utils';
import TextField from '../../../components/textField';
import Button from '../../../components/button';

function LoginView(props: LoginViewProps): JSX.Element {
  const {
    userCredentials,
    onEmailChange,
    onPasswordChange,
    onLogin,
    onLoginDisabled,
  } = props;
  const {
    formContainerStyle,
    contentStyle,
    formImageStyle,
    formGreetContainerStyle,
    recoverPasswordContainerStyle,
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
          <TextField
            inputMode="email"
            autoCapitalize="none"
            value={userCredentials.email}
            onChangeText={onEmailChange}
            placeholder={'Correo'}
          />
          <TextField
            inputMode="text"
            aria-hidden={true}
            value={userCredentials.password}
            onChangeText={onPasswordChange}
            placeholder={'Contraseña'}
            secureTextEntry
          />
          <Button onPress={onLogin} disabled={onLoginDisabled}>
            {'Ingresar'}
          </Button>
          <View>
            <Typography
              textStyles={recoverPasswordContainerStyle}
              size={sizes.medium}
              weight={'Regular'}
              color={colors.text}>
              {'Recuperar Contraseña?'}
            </Typography>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}

export default LoginView;
