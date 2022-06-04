import { blenders } from "@/mocks/blenders";
import { categories } from "@/mocks/categories";
import { selectAccount } from "@/store/features/account/account";
import { updatePreferences } from "@/store/features/account/account/thunks";
import { selectUser } from "@/store/features/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicAction from "components/common/Cards/Basic/CardBasicAction";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { Checkbox, Form } from "components/common/Forms";
import React, { FC, useCallback } from "react";
import PreferencesButton from "./PreferencesButton";

const PreferencesForm: FC = () => {
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    async (data: { [key: string]: any }) => {
      if (!account) return;
      const checkedCategories: string[] = Object.keys(data).filter(
        (key) => data[key] === true
      );
      dispatch(
        updatePreferences({ ...account, preferences: checkedCategories })
      );
    },
    [account, dispatch]
  );

  if (!user || !account) return null;

  return (
    <CardBasic>
      <CardBasicTitle title="Preferencias" />
      <Form onSubmit={onSubmit} className="space-y-5">
        <h6 className="font-semibold py-2">Categorías</h6>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-full capitalize grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2">
            {categories.map(({ name }, index) => {
              return (
                <Checkbox
                  key={index}
                  name={name}
                  label={name}
                  {...(account.preferences.includes(name)
                    ? { checked: true }
                    : {})}
                />
              );
            })}
          </div>
        </div>
        <h6 className="font-semibold py-2">Robots</h6>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-full capitalize grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2">
            {blenders.map(({ name }, index) => (
              <Checkbox
                key={index}
                name={name}
                label={name}
                {...(account.preferences.includes(name)
                  ? { checked: true }
                  : {})}
              />
            ))}
          </div>
        </div>
        <CardBasicAction>
          <PreferencesButton />
        </CardBasicAction>
      </Form>
    </CardBasic>
  );
};

export default PreferencesForm;
