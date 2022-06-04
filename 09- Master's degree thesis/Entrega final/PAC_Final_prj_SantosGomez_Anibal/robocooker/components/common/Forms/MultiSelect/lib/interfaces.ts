import { ReactNode } from "react";

export interface Option {
  //@ts-ignore
  value;
  label: string;
  key?: string;
  disabled?: boolean;
}

export interface ISelectProps {
  options: Option[];
  value: Option[];
  //@ts-ignore
  onChange?;
  valueRenderer?: (selected: Option[], options: Option[]) => ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  disableSearch?: boolean;
  shouldToggleOnHover?: boolean;
  hasSelectAll?: boolean;
  filterOptions?: (
    options: Option[],
    filter: string
  ) => Promise<Option[]> | Option[];
  overrideStrings?: { [key: string]: string };
  labelledBy: string;
  className?: string;
  label?: string;
  //@ts-ignore
  onMenuToggle?;
  debounceDuration?: number;
  defaultIsOpen?: boolean;
  isOpen?: boolean;
  isCreatable?: boolean;
  //@ts-ignore
  onCreateOption?;
  closeOnChangedValue?: boolean;
}
