import { SocialNetwork } from "@/models/user/user";
import { selectAccount } from "@/store/features/account/account";
import { updateSocialIG } from "@/store/features/account/account/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";
import InstagramButton from "./InstagramButton";

const Instagram: FC = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({ instagram }: SocialNetwork) => {
      if (!account) return;
      dispatch(
        updateSocialIG({
          ...account,
          social: { ...account.social, instagram },
        })
      );
    },
    [account, dispatch]
  );
  return (
    <Form
      onSubmit={onSubmit}
      className="flex space-x-5 col-span-full sm:col-span-6"
    >
      <Input
        type="text"
        name="instagram"
        iconSimple={{
          name: "Instagram",
        }}
        {...(account &&
          account.social &&
          account.social.instagram && {
            defaultValue: account.social.instagram,
          })}
      />

      <InstagramButton />
    </Form>
  );
};

export default Instagram;
