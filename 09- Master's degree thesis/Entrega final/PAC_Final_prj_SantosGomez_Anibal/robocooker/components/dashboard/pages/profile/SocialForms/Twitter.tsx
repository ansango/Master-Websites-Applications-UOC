import { SocialNetwork } from "@/models/user/user";
import { selectAccount } from "@/store/features/account/account";
import { updateSocialTW } from "@/store/features/account/account/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";
import TwitterButton from "./TwitterButton";

const Twitter: FC = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({ twitter }: SocialNetwork) => {
      if (!account) return;
      dispatch(
        updateSocialTW({
          ...account,
          social: { ...account.social, twitter },
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
        name="twitter"
        iconSimple={{
          name: "Twitter",
        }}
        {...(account &&
          account.social &&
          account.social.twitter && {
            defaultValue: account.social.twitter,
          })}
      />

      <TwitterButton />
    </Form>
  );
};

export default Twitter;
