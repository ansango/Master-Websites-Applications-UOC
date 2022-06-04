import React from "react";

import { Option } from "../lib/interfaces";

interface IDefaultItemRendererProps {
  checked: boolean;
  option: Option;
  disabled?: boolean;
  //@ts-ignore
  onClick;
}

const DefaultItemRenderer = ({
  checked,
  option,
  onClick,
  disabled,
}: IDefaultItemRendererProps) => (
  <div className="form-control max-w-xs">
    <label className="label cursor-pointer justify-start space-x-4">
      <input
        className="checkbox checkbox-sm"
        type="checkbox"
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
        disabled={disabled}
      />
      <span className="capitalize line-clamp-1">{option.label}</span>
    </label>
  </div>
);

export default DefaultItemRenderer;
