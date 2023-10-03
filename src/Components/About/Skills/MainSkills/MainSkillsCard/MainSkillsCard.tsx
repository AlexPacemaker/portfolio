import React from "react";
import styles from "./MainSkillsCard.module.scss";
import { MainSkillsProps } from "../../OtherSkills/OtherSkillCard/OtheSkillCardProps";

//карточка с основными скилами
const MainSkillsCard = ({ title, imgUrl }: MainSkillsProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='mainSkill' width={120} />
      <p>{title}</p>
    </div>
  );
};

export default MainSkillsCard;
