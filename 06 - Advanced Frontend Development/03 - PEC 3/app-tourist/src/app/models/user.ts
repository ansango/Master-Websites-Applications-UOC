export interface User {
  id?: number;
  userType: UserType;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  birthday?: Date;
  phone?: string;
  nationality?: UserNationality;
  nif?: string;
  about?: string;
  companyName?: string;
  companyDescription?: string;
  cif?: string;
}

export enum UserType {
  TOURIST = 'tourist',
  COMPANY = 'company',
}

export enum UserNationality {
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  PT = 'pt',
}
