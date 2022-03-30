import * as cn from "./SpinnerGradientStyles";

type SpinnerGradientProps = {
  /**
   * monochrome | duotone
   */
  kind?: "monochrome" | "duotone";
  /**
   * blue | green | cyan | teal | lime | red | pink | purple
   * @default "blue"
   */
  style?: "blue" | "green" | "cyan" | "teal" | "lime" | "red" | "pink" | "purple";
  /**
   * xsmall | small | base | large | xlarge
   * @default "base"
   */
  size?: keyof typeof cn.size;
};

export default SpinnerGradientProps;
