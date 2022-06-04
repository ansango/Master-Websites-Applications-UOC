import React, { useEffect, useState } from "react";

import { ISelectProps, Option } from "../lib/interfaces";

const defaultStrings = {
  allItemsAreSelected: "Todas las opciones seleccionadas",
  clearSearch: "Limpiar búsqueda",
  clearSelected: "Limpiar selección",
  noOptions: "No hay opciones",
  search: "Buscar",
  selectAll: "Seleccionar todo",
  selectAllFiltered: "Seleccionar todo",
  selectSomeItems: "Seleccionar",
  create: "Crear",
};

const defaultProps: Partial<ISelectProps> = {
  value: [],
  hasSelectAll: true,
  className: "multi-select",
  debounceDuration: 200,
  options: [] as Option[],
  labelledBy: "dasgsdg",
};

interface MultiSelectContextProps extends ISelectProps {
  t: (key: string) => string;
  //@ts-ignore
  setOptions?;
}

interface MultiSelectProviderProps {
  props: ISelectProps;
  //@ts-ignore
  children;
}

const MultiSelectContext = React.createContext<MultiSelectContextProps>(
  {} as MultiSelectContextProps
);

export const MultiSelectProvider = ({
  props,
  children,
}: MultiSelectProviderProps) => {
  const [options, setOptions] = useState(props.options);
  //@ts-ignore
  const t = (key) => props.overrideStrings?.[key] || defaultStrings[key];

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  return (
    <MultiSelectContext.Provider
      value={{ t, ...defaultProps, ...props, options, setOptions }}
    >
      {children}
    </MultiSelectContext.Provider>
  );
};

export const useMultiSelect = () => React.useContext(MultiSelectContext);
