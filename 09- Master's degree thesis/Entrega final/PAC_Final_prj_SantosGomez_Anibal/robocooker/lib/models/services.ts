type ErrorService = {
  400: string;
  401: string;
  403: string;
  404: string;
  500: string;
  default: string;
};

type ResponseService = {
  sigIn: string;
  sigUp: string;
  saveUser: string;
  saveAccount: string;
  updateAvatarAccount: string;
  updatePassword: string;
  recoveryPassword: string;
  resetPassword: string;
  verifyEmail: string;
  default: string;
};

export { type ErrorService, type ResponseService };
