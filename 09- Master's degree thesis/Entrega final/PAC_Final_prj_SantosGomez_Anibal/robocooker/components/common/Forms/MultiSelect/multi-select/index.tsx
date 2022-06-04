import React from "react";

import { MultiSelectProvider } from "../hooks/use-multi-select";
import { ISelectProps } from "../lib/interfaces";
import Dropdown from "./dropdown";

const MultiSelect = (props: ISelectProps) => (
  <MultiSelectProvider props={props}>
    <Dropdown />
  </MultiSelectProvider>
);

export default MultiSelect;
