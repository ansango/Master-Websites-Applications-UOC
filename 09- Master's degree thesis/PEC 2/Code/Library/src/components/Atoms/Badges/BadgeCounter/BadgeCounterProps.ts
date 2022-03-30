type BadgeCounterProps = {
  /**
   * counter
   */
  counter?: number;
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  /**
   * Class Name override
   */
  classBadge?: string;
};

export default BadgeCounterProps;
