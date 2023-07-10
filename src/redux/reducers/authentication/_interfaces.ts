export interface User {
  id: number;
  user_id: number;
  password: string;
}

export interface AuthenticationState {
  users: User[];
  isAuthenticated: boolean;
}
