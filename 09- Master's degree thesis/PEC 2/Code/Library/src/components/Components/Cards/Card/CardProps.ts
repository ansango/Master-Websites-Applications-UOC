type CardProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   * ()=> void
   */
  action?: () => void;
};

export default CardProps;
