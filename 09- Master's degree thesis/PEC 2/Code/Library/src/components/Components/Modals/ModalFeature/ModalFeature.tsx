/**
 * ?ModalFeature Component
 */

import { FC } from "react";
import * as cn from "./ModalFeatureStyles";
import ModalFeatureProps from "./ModalFeatureProps";

/**
 * Description of ModalFeature component displayed in Storybook
 */

const ModalFeature: FC<ModalFeatureProps> = ({ option = "option__one", className, ...props }) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>ModalFeature</span>
    </div>
  );
};

export default ModalFeature;
