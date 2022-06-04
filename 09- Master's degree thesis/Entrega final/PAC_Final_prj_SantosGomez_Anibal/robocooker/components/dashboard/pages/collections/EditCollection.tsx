import {
  Collection,
  CollectionDAO,
  CollectionDTO,
} from "@/models/user/bookmark";
import {
  selectBookmarkId,
  selectBookmarkRecipes,
} from "@/store/features/account/bookmark";
import {
  getBookmark,
  getBookmarkRecipes,
} from "@/store/features/account/bookmark/thunks";
import { selectCollection } from "@/store/features/account/collection";
import { editCollection } from "@/store/features/account/collection/thunks";
import { useAppSelector } from "@/store/hooks";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { Checkbox, Form, Input } from "components/common/Forms";
import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import { closeModal } from "components/common/Modal/utils";
import Step from "components/common/Stepper/Step";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditButton from "./EditButton";

const EditCollection: FC<{ id: string }> = ({ id }) => {
  const collection = useAppSelector(selectCollection);
  const bookmarkId = useAppSelector(selectBookmarkId);
  const dispatch = useDispatch();
  const allMyBookMarkedRecipes = useAppSelector(selectBookmarkRecipes) || [];

  useEffect(() => {
    dispatch(getBookmarkRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (!bookmarkId) dispatch(getBookmark());
  }, [dispatch, bookmarkId]);

  const onSubmit = useCallback(
    ({ name, description, recipes }: any) => {
      if (bookmarkId && collection) {
        const recipesIds = Object.keys(recipes).filter(
          (key) => recipes[key] === true
        );

        const data: Collection = {
          _id: collection._id,
          bookmarkId,
          name,
          description,
          recipes: recipesIds,
          created: collection.created,
        };
        dispatch(editCollection(data));
        closeModal(id);
      }
    },
    [bookmarkId, dispatch, id, collection]
  );

  // if (!collection) return null;
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="Editar colección" />
          <ModalContent>
            <div className="card card-compact overflow-visible bg-base-100 w-full">
              <div className="card-body">
                <Step
                  step={1}
                  expanded
                  title="Datos de la colección"
                  icon={{ kind: "outline", type: "DocumentTextIcon" }}
                >
                  <CardSlimContent>
                    <div className="grid gap-4 grid-cols-12 py-5">
                      <div className="col-span-full sm:col-span-6">
                        {collection && (
                          <Input
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            options={{
                              required: {
                                value: true,
                                message: "Introduce un nombre",
                              },
                            }}
                            {...{
                              defaultValue: collection.name,
                            }}
                          />
                        )}
                      </div>
                      <div className="col-span-full sm:col-span-6">
                        {collection && (
                          <Input
                            name="description"
                            type="text"
                            placeholder="Descripción"
                            options={{
                              required: {
                                value: true,
                                message: "Introduce una descripción",
                              },
                            }}
                            {...{ defaultValue: collection.description }}
                          />
                        )}
                      </div>
                    </div>
                  </CardSlimContent>
                </Step>
              </div>
            </div>
            <div className="card card-compact overflow-visible bg-base-100 w-full">
              <div className="card-body">
                <Step
                  step={2}
                  title="Elegir recetas"
                  icon={{ kind: "outline", type: "CollectionIcon" }}
                >
                  <div className="py-2">
                    {allMyBookMarkedRecipes.length > 0 && collection ? (
                      <div className="grid grid-cols-12 gap-5 max-h-96 overflow-y-auto py-7">
                        {allMyBookMarkedRecipes.map(({ _id, img, name }, i) => {
                          const checked = collection.recipes
                            .map((recipe) => recipe._id)
                            .includes(_id);
                          return (
                            <div key={_id} className="col-span-4">
                              <div className="relative w-24 h-24 space-y-2">
                                <div className="z-10 right-0 top-0 bg-transparent absolute">
                                  <Checkbox
                                    name={`recipes.${_id}`}
                                    kind="accent"
                                    checked={checked}
                                  />
                                </div>
                                <div className="mask mask-squircle w-24 h-24">
                                  <Image
                                    src={img}
                                    loading="lazy"
                                    alt="hero"
                                    layout="fill"
                                    className="object-center object-cover pointer-events-none"
                                  />
                                </div>
                                <div className="text-sm text-center">
                                  {name}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </Step>
              </div>
            </div>
          </ModalContent>
          <ModalAction>
            <EditButton />
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default EditCollection;
