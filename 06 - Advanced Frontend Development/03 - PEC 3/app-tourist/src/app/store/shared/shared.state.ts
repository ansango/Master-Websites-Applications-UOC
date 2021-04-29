export interface SharedState {
  showSpinner: boolean;
  showSkeleton: boolean;
  errorMessage: string;
  successMessage: string;
}

export const initialState: SharedState = {
  showSpinner: false,
  showSkeleton: false,
  errorMessage: '',
  successMessage: '',
};
