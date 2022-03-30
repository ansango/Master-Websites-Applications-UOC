/**
 * ?CardCallAction Component
 */

import { FC } from "react";
import { CardCallActionProps } from ".";
import { IconSimple } from "../../../Atoms";

import * as cn from "./CardCallActionStyles";

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardCallAction: FC<CardCallActionProps> = ({ title, description, actions }) => {
  return (
    <div className={cn.cContainer}>
      <h3 className={cn.cTitle}>{title}</h3>
      <p className={cn.cDescription}>{description}</p>
      <div className={cn.cContainerButtons}>
        <button className={cn.cButton} onClick={actions.primary.action}>
          <IconSimple icon={actions.primary.icon} classIcon={cn.cButtonIcon} />

          <div className={cn.cAcont}>
            <div className={cn.cADesc}>{actions.primary.description}</div>
            <div className={cn.cALab}>{actions.primary.label}</div>
          </div>
        </button>
        <button className={cn.cButton} onClick={actions.secondary.action}>
          <IconSimple icon={actions.secondary.icon} classIcon={cn.cButtonIcon} />
          <div className={cn.cAcont}>
            <div className={cn.cADesc}>{actions.secondary.description}</div>
            <div className={cn.cALab}>{actions.secondary.label}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardCallAction;
