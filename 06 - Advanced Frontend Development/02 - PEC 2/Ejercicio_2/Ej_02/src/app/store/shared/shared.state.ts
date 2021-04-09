export interface SharedState {
  errorMessage: string;
  successMessage: string;
}

export const initialState: SharedState = {
  errorMessage: '',
  successMessage: '',
};
