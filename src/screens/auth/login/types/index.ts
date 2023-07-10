export interface LoginScreenMethods {
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onLogin: () => void;
}

export interface LoginScreenData {
  userCredentials: {
    email: string;
    password: string;
  };
  onLoginDisabled: boolean;
}

export interface LoginScreenProps {}
export interface LoginViewProps extends LoginScreenMethods, LoginScreenData {}
