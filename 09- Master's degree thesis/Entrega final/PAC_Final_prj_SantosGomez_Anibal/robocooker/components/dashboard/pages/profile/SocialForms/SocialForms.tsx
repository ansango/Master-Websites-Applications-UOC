import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { FC } from "react";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import Youtube from "./Youtube";

const SocialForms: FC = () => {
  return (
    <CardBasic>
      <CardBasicTitle title="Redes Sociales" />
      <div className="grid grid-cols-12 gap-5">
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
    </CardBasic>
  );
};

export default SocialForms;
