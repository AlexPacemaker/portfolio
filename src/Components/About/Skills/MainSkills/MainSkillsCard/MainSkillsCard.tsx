import React from "react";
import styles from "./MainSkillsCard.module.scss";
import { MainSkillsCardProps } from "./MainSkillsCardProps";

//карточка с основными скилами
const MainSkillsCard = ({ title, imgUrl }: MainSkillsCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='mainSkill' width={120} />
      <p>{title}</p>
    </div>
  );
};

export default MainSkillsCard;
