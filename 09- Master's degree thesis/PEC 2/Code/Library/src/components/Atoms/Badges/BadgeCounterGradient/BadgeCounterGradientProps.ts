export type BadgeCounterGradientProps = {
  /**
   * counter
   */
  counter?: number;
  /**
   * monochrome | duotone
   */
  kind?: "monochrome" | "duotone";
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "blue" | "green" | "cyan" | "teal" | "lime" | "red" | "pink" | "purple";
};

export default BadgeCounterGradientProps;