import { ReactElement } from "react";
import { ButtonProps } from "../../Buttons/Button";

type CardPricingProps = {
  /**
   * string
   */
  title: string;
  /**
   * string
   */
  price: string;
  /**
   * string
   */
  currency: string;
  /**
   * string
   */
  period: string;
  /**
   * {title: string; included: boolean}[]
   */
  features: {
    title: string;
    included: boolean;
  }[];
  /**
   * ReactElement<ButtonProps>
   */
  button: ReactElement<ButtonProps>;
};

export default CardPricingProps;
