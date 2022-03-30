type CardListProps = {
  /**
   * { title: string; onDetail: () => void; }
   */
  detail?: {
    title: string;
    onDetail: () => void;
  };
  /**
   * string
   */
  title: string;
  /**
   * xsmall | small | medium | large | xlarge
   */
  avatar: "xsmall" | "small" | "base" | "large" | "xlarge";
  /**
   * { name: string; image: string; description: string; bold?: boolean; }[]
   */
  data: {
    name: string;
    description: string;
    image: string;
    bold?: string;
  }[];
};

export default CardListProps;