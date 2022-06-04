import { Account, User } from "@/models/user/user";
import { selectAccount } from "@/store/features/account/account";
import { updateAccount } from "@/store/features/account/account/thunks";

import { selectUser } from "@/store/features/user";
import { updateUser } from "@/store/features/user/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicAction from "components/common/Cards/Basic/CardBasicAction";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { Date, Form, Input, TextArea } from "components/common/Forms";
import { FC, useCallback } from "react";
import DataAccountButton from "./DataAccountButton";

type AccountDataForm = {
  username: string;
  email: string;
  about: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  address: string;
  city: string;
  country: string;
  zip: string;
};

const DataAccountForm: FC = () => {
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    async ({
      address,
      birthday,
      city,
      country,
      email,
      firstName,
      lastName,
      phone,
      username,
      zip,
      about,
    }: AccountDataForm) => {
      if (!user || !account) return;
      const userData: User = {
        ...user,
        username,
        email,
      };

      const accountData: Account = {
        ...account,
        about,
        firstName,
        lastName,
        phone,
        birthday,
        address: { ...account.address, address, city, country, zip },
      };
      dispatch(updateUser(userData));
      dispatch(updateAccount(accountData));
    },

    [dispatch, user, account]
  );
  if (!user || !account) return <></>;
  return (
    <CardBasic>
      <CardBasicTitle title="Información" />
      <Form onSubmit={onSubmit}>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-full sm:col-span-6 2xl:col-span-3">
            <Input
              type="text"
              name="username"
              label="Nombre de usuario"
              {...(user && { defaultValue: user.username })}
              options={{
                required: {
                  value: true,
                  message: "Introduce un nombre de usuario",
                },
                minLength: {
                  value: 4,
                  message:
                    "El nombre de usuario debe tener al menos 4 caracteres",
                },
              }}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="text"
              name="email"
              label="Correo electrónico"
              {...(user && { defaultValue: user.email })}
              options={{
                required: { value: true, message: "Introduce un email" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Introduce un email valido",
                },
              }}
            />
          </div>

          <div className="col-span-full sm:col-span-full 2xl:col-span-5">
            <TextArea
              name="about"
              label="Biografía"
              size="xs"
              {...(account && { defaultValue: account.about })}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="text"
              name="firstName"
              label="Nombre"
              {...(account && { defaultValue: account.firstName })}
              options={{
                required: {
                  value: false,
                  message: "Introduce un nombre",
                },
                minLength: {
                  value: 4,
                  message: "Tu nombre debe tener al menos 4 caracteres",
                },
              }}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="text"
              name="lastName"
              label="Apellido"
              {...(account && { defaultValue: account.lastName })}
              options={{
                required: {
                  value: false,
                  message: "Introduce un nombre",
                },
                minLength: {
                  value: 4,
                  message: "Tu nombre debe tener al menos 4 caracteres",
                },
              }}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="tel"
              name="phone"
              label="Teléfono"
              {...(account && { defaultValue: account.phone })}
              options={{
                required: {
                  value: false,
                  message: "Introduce un teléfono",
                },
                minLength: {
                  value: 10,
                  message: "Tu teléfono debe tener 10 dígitos",
                },
              }}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Date
              type="date"
              name="birthday"
              label="Fecha de nacimiento"
              {...(account && { defaultValue: account.birthday })}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="text"
              name="address"
              label="Dirección"
              {...(account && { defaultValue: account.address.address })}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="text"
              name="city"
              label="Ciudad"
              {...(account && { defaultValue: account.address.city })}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            {" "}
            <Input
              type="text"
              name="country"
              label="País"
              {...(account && { defaultValue: account.address.country })}
            />
          </div>

          <div className="col-span-full sm:col-span-6 2xl:col-span-4">
            <Input
              type="text"
              name="zip"
              label="Código postal"
              {...(account && { defaultValue: account.address.zip })}
            />
          </div>

          <div className="col-span-full">
            <CardBasicAction>
              <DataAccountButton />
            </CardBasicAction>
          </div>
        </div>
      </Form>
    </CardBasic>
  );
};

export default DataAccountForm;
