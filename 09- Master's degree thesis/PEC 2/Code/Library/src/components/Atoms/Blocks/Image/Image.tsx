/**
 * ?Image Component
 */

import { FC } from "react";
import ImageProps from "./ImageProps";

/**
 * Description of Image component displayed in Storybook
 */

const Image: FC<ImageProps> = ({ src, alt, ImageNextJS, className }) => {
  if (ImageNextJS) {
    return <ImageNextJS src={src} className={className} alt={alt} />;
  }
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
