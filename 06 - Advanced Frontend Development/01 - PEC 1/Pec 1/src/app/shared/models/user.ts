import { Profile } from './profile';

export interface User {
  id?: number;
  type: UserType;
  email: string;
  password?: string;
}

export enum UserType {
  TOURIST = 'tourist',
  COMPANY = 'company',
}

export interface UserForm extends User, Profile {
  rePassword: string;
}
