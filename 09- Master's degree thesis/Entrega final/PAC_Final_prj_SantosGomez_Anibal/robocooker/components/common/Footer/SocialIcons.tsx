import { FC } from "react";
import IconSimple from "../Icons/IconSimple";

const SocialIcons: FC = () => {
  return (
    <>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Facebook" className="w-5 h-5" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Twitter" className="w-5 h-5" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Instagram" className="w-5 h-5" />
      </a>
      <a href="https://youtube.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Youtube" className="w-5 h-5" />
      </a>
    </>
  );
};

export default SocialIcons;
