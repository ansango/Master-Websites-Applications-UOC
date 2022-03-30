import { ReactElement, ReactNode } from "react";

type ModalFormProps = {
  opened: boolean;
  element: ReactElement;
  form: ReactNode;
};

export default ModalFormProps;
