export interface HomeScreenMethods {
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
}

export interface HomeScreenData {
  userCredentials: {
    email: string;
    password: string;
  };
}

export interface HomeScreenProps extends HomeScreenMethods, HomeScreenData {}
