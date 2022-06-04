import { Icon } from "components/common/Icons";
import React, { useEffect, useRef, useState } from "react";

import { useDidUpdateEffect } from "../hooks/use-did-update-effect";
import { useKey } from "../hooks/use-key";
import { useMultiSelect } from "../hooks/use-multi-select";
import { KEY } from "../lib/constants";
import SelectPanel from "../select-panel";
import { DropdownHeader } from "./header";

const Dropdown = () => {
  const {
    t,
    onMenuToggle,
    shouldToggleOnHover,
    isLoading,
    disabled,
    onChange,
    labelledBy,
    value,
    isOpen,
    defaultIsOpen,
    closeOnChangedValue,
    label,
  } = useMultiSelect();

  useEffect(() => {
    if (closeOnChangedValue) {
      setExpanded(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const [isInternalExpand, setIsInternalExpand] = useState(true);
  const [expanded, setExpanded] = useState(defaultIsOpen);
  const [hasFocus, setHasFocus] = useState(false);

  const wrapper: any = useRef();

  useDidUpdateEffect(() => {
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);

  useEffect(() => {
    if (defaultIsOpen === undefined && typeof isOpen === "boolean") {
      setIsInternalExpand(false);
      setExpanded(isOpen);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  //@ts-ignore
  const handleKeyDown = (e) => {
    // allows space and enter when focused on input/button
    if (
      ["text", "button"].includes(e.target.type) &&
      [KEY.SPACE, KEY.ENTER].includes(e.code)
    ) {
      return;
    }

    if (isInternalExpand) {
      if (e.code === KEY.ESCAPE) {
        setExpanded(false);
        wrapper?.current?.focus();
      } else {
        setExpanded(true);
      }
    }
    e.preventDefault();
  };

  useKey([KEY.ENTER, KEY.ARROW_DOWN, KEY.SPACE, KEY.ESCAPE], handleKeyDown, {
    target: wrapper,
  });

  const handleHover = (iexpanded: boolean) => {
    isInternalExpand && shouldToggleOnHover && setExpanded(iexpanded);
  };

  const handleFocus = () => !hasFocus && setHasFocus(true);
  //@ts-ignore
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false);
      setExpanded(false);
    }
  };

  const handleMouseEnter = () => handleHover(true);

  const handleMouseLeave = () => handleHover(false);

  const toggleExpanded = () => {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded);
  };
  //@ts-ignore
  const handleClearSelected = (e) => {
    e.stopPropagation();
    onChange([]);
    isInternalExpand && setExpanded(false);
  };

  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <div
        tabIndex={0}
        className="relative outline-none input w-full input-bordered"
        aria-labelledby={labelledBy}
        aria-expanded={expanded}
        aria-readonly={true}
        aria-disabled={disabled}
        ref={wrapper}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex w-full h-full justify-between items-center"
          onClick={toggleExpanded}
        >
          <DropdownHeader />

          <div className="flex items-center space-x-1">
            {value.length > 0 && (
              <button
                type="button"
                className="clear-selected-button"
                onClick={handleClearSelected}
                disabled={disabled}
                aria-label={t("clearSelected")}
              >
                <Icon kind="outline" icon="XIcon" className="w-5 h-5" />
              </button>
            )}
            {expanded ? (
              <Icon icon="ChevronUpIcon" kind="outline" className="w-5 h-5" />
            ) : (
              <Icon icon="ChevronDownIcon" kind="outline" className="w-5 h-5" />
            )}
          </div>
        </div>
        {expanded && (
          <div className="absolute z-[1] left-0 top-14 w-full pt-4 bg-base-100 rounded-lg border shadow-md">
            <div className="px-5">
              <SelectPanel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
