import { Input, Select, TextArea } from "components/common/Forms";
import { Icon } from "components/common/Icons";
import React, { memo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const Steps = () => {
  // TODO: VALIDATION
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  return (
    <>
      <ul className="space-y-2 w-full">
        {fields.map((item, index) => {
          return (
            <li key={item.id} className="grid grid-cols-12 gap-5">
              <span className="hidden">
                <Input name={`steps[${index}].position`} type="number" />
              </span>
              <div className="col-span-full sm:col-span-10">
                <TextArea
                  name={`steps[${index}].description`}
                  label={`Paso ${index + 1}`}
                  size="xs"
                />
              </div>

              <div className="flex items-end justify-end col-span-full sm:col-span-2">
                <button
                  className="btn btn-error btn-circle"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <Icon icon="XIcon" kind="outline" className="w-5 h-5" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-end space-x-4">
        <div className="tooltip tooltip-left" data-tip="Añadir pasos">
          <button
            className="btn btn-success normal-case btn-circle btn-md"
            type="button"
            onClick={() => {
              append({ description: "", position: fields.length + 1 });
            }}
          >
            <Icon icon="PlusIcon" kind="outline" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

const StepsFields = memo(Steps);

export default StepsFields;
