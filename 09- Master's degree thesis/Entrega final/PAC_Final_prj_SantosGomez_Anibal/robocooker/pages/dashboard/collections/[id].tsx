import { selectCollection } from "@/store/features/account/collection";
import { getCollection } from "@/store/features/account/collection/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ModalOpen from "components/common/Modal/ModalOpen";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import CollectionView from "components/dashboard/pages/collections/CollectionView";
import DeleteCollection from "components/dashboard/pages/collections/DeleteCollection";
import EditCollection from "components/dashboard/pages/collections/EditCollection";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CollectionPage: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const collection = useAppSelector(selectCollection);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getCollection(id));
    }
  }, [id, dispatch]);

  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Colecciones" />
        <Breadcrumb>
          <BreadcrumbLink
            href="/dashboard/collections"
            label="Colecciones"
            icon={{ icon: "BookmarkIcon", kind: "outline" }}
          />
          {collection && (
            <BreadcrumbNoLink
              label={collection.name}
              icon={{ icon: "BookmarkAltIcon", kind: "outline" }}
            />
          )}
        </Breadcrumb>
        <div className="flex w-full justify-end space-x-2">
          <ModalOpen
            id="edit-collection"
            className="btn btn-circle btn-accent btn-sm"
          >
            <Icon kind="outline" icon="PencilIcon" className="w-4 h-4" />
          </ModalOpen>
          <ModalOpen
            id="delete-collection"
            className="btn btn-circle btn-error btn-sm"
          >
            <Icon kind="outline" icon="XIcon" className="w-4 h-4" />
          </ModalOpen>
        </div>
        <CollectionView />
        {collection && <EditCollection id="edit-collection" />}
        {collection && <DeleteCollection id="delete-collection" />}
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default CollectionPage;
