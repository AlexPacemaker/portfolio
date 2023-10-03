import React from "react";
import styles from "./OtherSkillCard.module.scss";
import { OtherSkillsCardProps } from "./OtheSkillsCardProps";

//карточка с второстепенными скилами
const OtherSkillsCard = ({ title, imgUrl }: OtherSkillsCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='minorSkill' width={70} />
      <p>{title}</p>
    </div>
  );
};

export default OtherSkillsCard;
