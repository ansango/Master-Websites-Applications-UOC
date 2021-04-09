import { UserType } from './user';

export interface Profile {
  id?: number;
  firstName: string;
  lastName: string;
  type: UserType;
  birthday?: Date;
  phone?: string;
  nationality?: ProfileNationality;
  nif?: string;
  about?: string;
  companyName?: string;
  companyDescription?: string;
  cif?: string;
}

export enum ProfileNationality {
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  PT = 'pt',
}
