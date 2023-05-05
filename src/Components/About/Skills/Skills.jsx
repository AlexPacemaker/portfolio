import React from "react";
import MainSkills from "./MainSkills/MainSkills";
import OtherSkills from "./OtherSkills/OtherSkills";
import styles from './Skills.module.scss'

//родительский компонент для MainSkills и OtherSkills
const Skills = () => {
  return (
    <div className={styles.container}>
      <MainSkills />
      <OtherSkills />
    </div>
  );
};

export default Skills;
