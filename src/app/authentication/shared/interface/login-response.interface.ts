import { User } from './user.interface';

export interface loginResponse {
  token: string;
  user: User;
}
