import * as cn from "./SpinnerStyles";

type SpinnerProps = {
  /**
   * solid | outline
   * @default "outline"
   */
  kind?: "solid" | "outline";
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  /**
   * xsmall | small | base | large | xlarge
   * @default "base"
   */
  size?: keyof typeof cn.size;
  /**
   * className override
   */
  classSpinner?: string;
};

export default SpinnerProps;
