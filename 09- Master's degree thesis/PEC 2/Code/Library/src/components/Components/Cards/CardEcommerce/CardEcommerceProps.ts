import { ButtonProps } from "../../Buttons/Button";

type CardEcommerceProps = {
  onDetail: () => void;
  product: {
    title: string;
    price: number;
    image?: string;
    rating: number;
  };
  action: ButtonProps
};

export default CardEcommerceProps;
