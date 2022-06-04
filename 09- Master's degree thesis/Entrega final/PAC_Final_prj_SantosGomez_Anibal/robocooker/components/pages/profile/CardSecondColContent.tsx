import { Profile } from "@/models/user/profile";
import { IconSimple } from "components/common/Icons";
import { FC } from "react";
import ActionFollow from "./ActionFollow";

type Props = {
  profile: Profile;
};

const CardSecondColContent: FC<Props> = ({ profile }) => {
  return (
    <>
      <div className="hidden sm:block space-y-3">
        <div className="">
          <h1 className="font-semibold text-xl sm:text-2xl">
            @{profile.username}
          </h1>
        </div>
        <div className="space-x-2">
          <ActionFollow />
          {/* <button className="btn btn-primary normal-case btn-sm space-x-1">
            <Icon icon="PaperAirplaneIcon" kind="solid" className="w-4 h-4" />
            <span>Mensaje</span>
          </button> */}
        </div>
      </div>
      <p className="space-x-5">
        <span>
          <span className="font-medium mr-1">{profile.recipes.length}</span>
          {profile.recipes.length > 1 ? "recetas" : "receta"}
        </span>
        <span>
          <span className="font-medium mr-1">{profile.followers.length}</span>
          seguidores
        </span>
        <span>
          <span className="font-medium mr-1">{profile.following.length}</span>
          seguidos
        </span>
      </p>
      <p className="font-medium text-lg">
        {profile.firstName} {profile.lastName}
      </p>
      <p className="text-gray-600 dark:text-gray-400">{profile.about}</p>
      <p className="flex space-x-5 items-center">
        <IconSimple icon="Facebook" className="w-5 h-5" />
        <IconSimple icon="Instagram" className="w-5 h-5" />
        <IconSimple icon="Twitter" className="w-5 h-5" />
        <IconSimple icon="Youtube" className="w-5 h-5" />
      </p>
    </>
  );
};

export default CardSecondColContent;
