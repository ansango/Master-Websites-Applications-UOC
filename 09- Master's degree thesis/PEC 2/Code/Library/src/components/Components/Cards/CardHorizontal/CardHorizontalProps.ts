type CardHorizontalProps = {
  /**
   * string
   */
  title: string;
  /**
   * string
   * max length: 210
   */
  content: string;
  /**
   * string
   */
  imgUrl: string;
  /**
   *
   */
  action: () => void;
};

export default CardHorizontalProps;