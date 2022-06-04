import { SocialNetwork } from "@/models/user/user";
import { selectAccount } from "@/store/features/account/account";
import { updateSocialYT } from "@/store/features/account/account/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";
import YoutubeButton from "./YoutubeButton";
const Youtube: FC = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({ youtube }: SocialNetwork) => {
      if (!account) return;
      dispatch(
        updateSocialYT({
          ...account,
          social: { ...account.social, youtube },
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
        name="youtube"
        iconSimple={{
          name: "Youtube",
        }}
        {...(account &&
          account.social &&
          account.social.youtube && {
            defaultValue: account.social.youtube,
          })}
      />

      <YoutubeButton />
    </Form>
  );
};

export default Youtube;
