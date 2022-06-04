import { onUnlikeRecipeService } from "@/services/account";
import {
  removeFavoriteRecipe,
  selectAccountId,
} from "@/store/features/account/account";
import { removeFavorite } from "@/store/features/account/favorites";
import { unlikeRecipe } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { Form } from "components/common/Forms";
import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import { closeModal } from "components/common/Modal/utils";
import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "./DeleteButton";

const DeleteFavorite: FC<{ id: string; idRecipe: string }> = ({
  id,
  idRecipe,
}) => {
  const accountId = useAppSelector(selectAccountId);
  const dispatch = useDispatch();
  const onSubmit = useCallback(async () => {
    if (idRecipe !== "") {
      await onUnlikeRecipeService(idRecipe);
      dispatch(unlikeRecipe(accountId));
      dispatch(removeFavoriteRecipe(idRecipe));
      dispatch(removeFavorite(idRecipe));
    }

    closeModal(id);
  }, [id, idRecipe, dispatch, accountId]);
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="Vas a eliminar esta receta de tus favoritos" />
          <ModalContent>
            <p>
              Esta acción no se puede deshacer. Si borras esta receta, no podrás
              recuperarla y desaparecerá de tus favoritos.
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

export default DeleteFavorite;
