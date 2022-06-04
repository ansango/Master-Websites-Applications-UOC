import { Icon } from "components/common/Icons";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useKey } from "../hooks/use-key";
import { useMultiSelect } from "../hooks/use-multi-select";
import { KEY } from "../lib/constants";
import { debounce } from "../lib/debounce";
import { filterOptions } from "../lib/fuzzy-match-utils";
import SelectItem from "./select-item";
import SelectList from "./select-list";

enum FocusType {
  SEARCH = 0,
  NONE = -1,
}

const SelectPanel = () => {
  const {
    t,
    onChange,
    options,
    setOptions,
    value,
    filterOptions: customFilterOptions,
    disabled,
    disableSearch,
    hasSelectAll,
    debounceDuration,
    isCreatable,
    onCreateOption,
  } = useMultiSelect();

  const listRef = useRef<any>();
  const searchInputRef = useRef<any>();
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchTextForFilter, setSearchTextForFilter] = useState("");
  const [focusIndex, setFocusIndex] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    //@ts-ignore
    debounce((query) => setSearchTextForFilter(query), debounceDuration),
    []
  );

  const skipIndex = useMemo(() => {
    let start = 0;

    if (!disableSearch) start += 1; // if search is enabled then +1 to skipIndex
    if (hasSelectAll) start += 1; // if select-all is enabled then +1 to skipIndex

    return start;
  }, [disableSearch, hasSelectAll]);

  const selectAllOption = {
    label: searchText ? t("selectAllFiltered") : t("selectAll"),
    value: "",
  };
  //@ts-ignore
  const selectAllValues = (checked) => {
    const filteredValues = filteredOptions
      .filter((o) => !o.disabled)
      .map((o) => o.value);

    if (checked) {
      const selectedValues = value.map((o) => o.value);
      const finalSelectedValues = [...selectedValues, ...filteredValues];

      return (customFilterOptions ? filteredOptions : options).filter((o) =>
        finalSelectedValues.includes(o.value)
      );
    }

    return value.filter((o) => !filteredValues.includes(o.value));
  };

  const selectAllChanged = (checked: boolean) => {
    const newOptions = selectAllValues(checked);
    onChange(newOptions);
  };
  //@ts-ignore
  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
    setSearchText(e.target.value);
    setFocusIndex(FocusType.SEARCH);
  };

  const handleClear = () => {
    setSearchTextForFilter("");
    setSearchText("");
    searchInputRef?.current?.focus();
  };

  const handleItemClicked = (index: number) => setFocusIndex(index);

  // Arrow Key Navigation
  //@ts-ignore
  const handleKeyDown = (e) => {
    switch (e.code) {
      case KEY.ARROW_UP:
        updateFocus(-1);
        break;
      case KEY.ARROW_DOWN:
        updateFocus(1);
        break;
      default:
        return;
    }
    e.stopPropagation();
    e.preventDefault();
  };

  useKey([KEY.ARROW_DOWN, KEY.ARROW_UP], handleKeyDown, {
    target: listRef,
  });

  const handleSearchFocus = () => {
    setFocusIndex(FocusType.SEARCH);
  };

  const handleOnCreateOption = async () => {
    let newOption = { label: searchText, value: searchText, __isNew__: true };

    // if custom `onCreateOption` is given then this will call this
    if (onCreateOption) {
      newOption = await onCreateOption(searchText);
    }

    // adds created value to existing options
    setOptions([newOption, ...options]);
    handleClear();

    onChange([...value, newOption]);
  };

  const getFilteredOptions = async () =>
    customFilterOptions
      ? await customFilterOptions(options, searchTextForFilter)
      : filterOptions(options, searchTextForFilter);

  const updateFocus = (offset: number) => {
    let newFocus = focusIndex + offset;
    newFocus = Math.max(0, newFocus);
    newFocus = Math.min(newFocus, options.length + Math.max(skipIndex - 1, 0));
    setFocusIndex(newFocus);
  };

  useEffect(() => {
    listRef?.current?.querySelector(`[tabIndex='${focusIndex}']`)?.focus();
  }, [focusIndex]);

  const [isAllOptionSelected, hasSelectableOptions] = useMemo(() => {
    const filteredOptionsList = filteredOptions.filter((o) => !o.disabled);
    return [
      filteredOptionsList.every(
        (o) => value.findIndex((v) => v.value === o.value) !== -1
      ),
      filteredOptionsList.length !== 0,
    ];
    // eslint-disable-next-line
  }, [filteredOptions, value]);

  useEffect(() => {
    getFilteredOptions().then(setFilteredOptions);
  }, [searchTextForFilter, options]);

  return (
    <div className="" role="listbox" ref={listRef}>
      <div className="relative">
        <input
          className="input input-sm input-bordered w-full absolute"
          placeholder={t("search")}
          type="text"
          aria-describedby={t("search")}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          value={searchText}
          ref={searchInputRef}
          tabIndex={0}
        />
        <button
          type="button"
          className="z-[1] absolute right-1 top-1.5"
          hidden={!searchText}
          onClick={handleClear}
          aria-label={t("clearSearch")}
        >
          <Icon kind="outline" icon="XIcon" className="w-5 h-5" />
        </button>
      </div>

      <ul className="pt-10 pb-5 grid grid-cols-1 sm:grid-cols-2">
        {hasSelectAll && hasSelectableOptions && (
          <SelectItem
            tabIndex={skipIndex === 1 ? 0 : 1}
            checked={isAllOptionSelected}
            option={selectAllOption}
            onSelectionChanged={selectAllChanged}
            onClick={() => handleItemClicked(1)}
            disabled={disabled}
          />
        )}

        {filteredOptions.length ? (
          <SelectList
            skipIndex={skipIndex}
            options={filteredOptions}
            //@ts-ignore
            onClick={(_e, index) => handleItemClicked(index)}
          />
        ) : isCreatable ? (
          <li onClick={handleOnCreateOption} className="select-item creatable">
            {`${t("create")} "${searchText}"`}
          </li>
        ) : (
          <li className="pt-5">{t("noOptions")}</li>
        )}
      </ul>
    </div>
  );
};

export default SelectPanel;
