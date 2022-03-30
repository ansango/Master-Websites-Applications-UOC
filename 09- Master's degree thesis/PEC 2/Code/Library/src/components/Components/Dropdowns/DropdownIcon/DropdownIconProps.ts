import { ButtonIconProps } from "../../Buttons/ButtonIcon";

type DropdownIconProps = {
  /**
   * ButtonProps
   */
  button: ButtonIconProps;
  /**
   * start | end
   */
  placement: "start" | "end";
  /**
   * small | base | large
   */
  size?: "small" | "base" | "large";
  /**
   * { label: string; action: () => void; }[]
   */
  options: {
    label: string;
    action: () => void;
  }[];
  /**
   * { label: string; action: () => void; }
   */
  divider?: {
    label: string;
    action: () => void;
  };
  /**
   * { label: string; content: string; }
   */
  header?: {
    label: string;
    content?: string;
  };
};

export default DropdownIconProps;