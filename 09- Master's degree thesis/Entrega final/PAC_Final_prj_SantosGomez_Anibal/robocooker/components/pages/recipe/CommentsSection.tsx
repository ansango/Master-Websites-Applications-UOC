import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import React, { FC } from "react";
import CommentForm from "./CommentForm";
import ContainerSection from "./ContainerSection";

type Props = {};

const CommentsSection: FC = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      {user && (
        <ContainerSection>
          <div className="p-5 rounded-lg bg-base-200">
            <CommentForm />
          </div>
        </ContainerSection>
      )}
    </>
  );
};

export default CommentsSection;
