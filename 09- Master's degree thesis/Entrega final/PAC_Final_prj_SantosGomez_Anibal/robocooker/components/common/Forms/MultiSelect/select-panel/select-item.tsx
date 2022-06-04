import React, { useRef } from "react";

import { useKey } from "../hooks/use-key";
import { KEY } from "../lib/constants";
import { Option } from "../lib/interfaces";
import DefaultItemRenderer from "./default-item";

interface ISelectItemProps {
  //@ts-ignore
  option: Option;
  checked?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  onSelectionChanged: (checked: boolean) => void;
  //@ts-ignore
  onClick;
}

const SelectItem = ({
  option,
  checked = false,
  tabIndex,
  disabled,
  onSelectionChanged,
  onClick,
}: ISelectItemProps) => {
  const itemRef: any = useRef();
  //@ts-ignore
  const onOptionCheck = (e) => {
    toggleChecked();
    e.preventDefault();
  };

  const toggleChecked = () => {
    if (!disabled) {
      onSelectionChanged(!checked);
    }
  };
  //@ts-ignore
  const handleClick = (e) => {
    toggleChecked();
    onClick(e);
  };

  useKey([KEY.ENTER, KEY.SPACE], onOptionCheck, { target: itemRef });

  return (
    <DefaultItemRenderer
      option={option}
      checked={checked}
      onClick={handleClick}
      disabled={disabled}
    />
  );
};

export default SelectItem;
