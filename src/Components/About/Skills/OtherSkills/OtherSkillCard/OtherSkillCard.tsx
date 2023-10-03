import React from "react";
import styles from "./OtherSkillCard.module.scss";
import { OtherSkillsProps } from "./OtheSkillCardProps";

//карточка с второстепенными скилами
const OtherSkillCard = ({ title, imgUrl }: OtherSkillsProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='minorSkill' width={70} />
      <p>{title}</p>
    </div>
  );
};

export default OtherSkillCard;
