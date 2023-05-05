import React from "react";
import styles from "./OtherSkillCard.module.scss";

//карточка с второстепенными скилами
const OtherSkillCard = ({ title, imgUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='minorSkill' width={70} />
      <p>{title}</p>
    </div>
  );
};

export default OtherSkillCard;
