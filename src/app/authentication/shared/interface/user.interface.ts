export interface User {
  id: number;
  bio: string;
  vip: boolean;
  mobile?: string;
  use_2fa: boolean;
  username: string;
  last_name: string;
  first_name: string;
  avatar: string;
}
