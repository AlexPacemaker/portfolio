import React from "react";
import styles from "./MainSkillsCard.module.scss";

const MainSkillsCard = ({ title, imgUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt='mainSkill' width={120} />
      <p>{title}</p>
    </div>
  );
};

export default MainSkillsCard;
