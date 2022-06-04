import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import ContainerSection from "./ContainerSection";
import Likes from "./Likes";
import SocialActions from "./SocialActions";

const SocialSection: FC = () => {
  const user = useAppSelector(selectUser);
  return (
    <ContainerSection>
      <div className="flex justify-between items-center">
        <Likes />
        {user && <SocialActions />}
      </div>
    </ContainerSection>
  );
};

export default SocialSection;
