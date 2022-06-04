import { selectCollection } from "@/store/features/account/collection";
import { deleteCollection } from "@/store/features/account/collection/thunks";
import { useAppSelector } from "@/store/hooks";
import { Form } from "components/common/Forms";
import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import { closeModal } from "components/common/Modal/utils";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "./DeleteButton";

const DeleteCollection: FC<{ id: string }> = ({ id }) => {
  const collectionId = useAppSelector(selectCollection)?._id;
  const { push } = useRouter();
  const redirect = () => push("/dashboard/collections");
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (collectionId) {
      dispatch(deleteCollection(collectionId));
      redirect();
    }
    closeModal(id);
  };
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="Estás seguro de borrar esta colección?" />
          <ModalContent>
            <p>
              Esta acción no se puede deshacer. Si borras esta colección, no
              podrás recuperarla.
            </p>
          </ModalContent>
          <ModalAction>
            <DeleteButton />
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default DeleteCollection;
