import { ButtonProps } from "../../Buttons/Button";

type CardActionProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   *
   */
  action: ButtonProps;
};

export default CardActionProps;
