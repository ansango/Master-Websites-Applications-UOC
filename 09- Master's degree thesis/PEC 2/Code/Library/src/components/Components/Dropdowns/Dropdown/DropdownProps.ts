import { ButtonProps } from "../../Buttons/Button";

type DropdownProps = {
  /**
   * ButtonProps
   */
  button: ButtonProps;
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

export default DropdownProps;
