import { ButtonProps } from "../../Buttons/Button";

type CardImageProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   * string
   */
  imgUrl: string;
  /**
   *
   */
  action: ButtonProps;
};

export default CardImageProps;
