import React from "react";

import { useMultiSelect } from "../hooks/use-multi-select";

const Badges = () => {
  const { value } = useMultiSelect();

  return (
    <div className="flex space-x-1 items-center w-full line-clamp-1">
      {value.map((val, i) => (
        <span className="badge badge-primary badge-sm capitalize" key={i}>
          {val.label}
        </span>
      ))}
    </div>
  );
};

const AllSelected = () => {
  const { t } = useMultiSelect();
  return (
    <span className="text-primary capitalize">{t("allItemsAreSelected")}</span>
  );
};

const NoSelected = () => {
  const { t } = useMultiSelect();
  return <span className="gray">{t("selectSomeItems")}</span>;
};

export const DropdownHeader = () => {
  const { value, options } = useMultiSelect();

  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;

  return noneSelected ? (
    <NoSelected />
  ) : (
    <>{allSelected ? <AllSelected /> : <Badges />}</>
  );
};
