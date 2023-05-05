import React from "react";
import styles from "./OtherSkillCard.module.scss";

const OtherSkillCard = ({ title, imgUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='minorSkill' width={70} />
      <p>{title}</p>
    </div>
  );
};

export default OtherSkillCard;
