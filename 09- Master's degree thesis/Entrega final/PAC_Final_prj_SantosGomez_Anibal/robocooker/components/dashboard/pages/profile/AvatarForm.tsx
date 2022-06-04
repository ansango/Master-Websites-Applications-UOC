import { selectUser } from "@/store/features/user";
import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import Avatar from "components/common/Avatar/Avatar";
import { Form } from "components/common/Forms";
import File from "components/common/Forms/File";
import { useCallback } from "react";

import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import CardBasicAction from "components/common/Cards/Basic/CardBasicAction";
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import AvatarButton from "./AvatarButton";
import { updateAvatar } from "@/store/features/account/account/thunks";
import { selectAccount } from "@/store/features/account/account";

const AvatarForm = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const onSubmit = useCallback(
    async ({ file }: any) => {
      const avatar = file[0];
      const isImage = avatar ? avatar.type.startsWith("image") : null;
      if (avatar && isImage) {
        const formData = new FormData();
        formData.append("avatar", avatar);
        dispatch(updateAvatar(formData));
      }
    },
    [dispatch]
  );
  const title = account?.firstName
    ? `${account.firstName} ${account.lastName}`
    : `@${user?.username} `;
  return (
    <CardBasic>
      <Form onSubmit={onSubmit}>
        <div className="w-full flex space-x-5">
          <div className="my-auto space-y-3">
            <div className="inline-flex flex-shrink ml-1">
              <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex">
                <Avatar
                  size="md"
                  imgUrl={account?.avatar}
                  username={user?.username ?? "R"}
                />
              </div>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <CardBasicTitle title={title} />

            {account?.firstName && (
              <h4 className="text-gray-600 dark:text-gray-400">
                @{user?.username}
              </h4>
            )}
            <div>
              <File
                name="file"
                options={{
                  required: { value: true, message: "Añade una foto" },
                }}
              />
            </div>
          </div>
        </div>
        <CardBasicAction>
          <AvatarButton />
        </CardBasicAction>
      </Form>
    </CardBasic>
  );
};

export default AvatarForm;
