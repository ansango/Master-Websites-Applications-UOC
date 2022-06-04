import { getAccount } from "@/store/features/account/account/thunks";
import { selectUser } from "@/store/features/user";
import { getUser } from "@/store/features/user/thunks";
import { Icon } from "components/common/Icons";
import ModalIssue from "components/common/Modal/Issue/ModalIssue";
import ModalOpen from "components/common/Modal/ModalOpen";
import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children?: ReactNode;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    if (!user) dispatch(getUser());
    if (user) dispatch(getAccount());
  }, [dispatch, user]);
  return (
    <>
      {children}
      <ModalOpen
        id="modal-issue"
        className="btn btn-circle btn-warning fixed bottom-5 right-5 z-50"
      >
        <Icon icon="ExclamationIcon" kind="outline" className="w-6 h-6" />
      </ModalOpen>
      <ModalIssue id="modal-issue" />
    </>
  );
};

export default WrapperLayout;
