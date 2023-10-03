//Импортируются необходимые библиотеки и компоненты
import React from "react";
import styles from "./About.module.scss";
import Bio from "./Bio/Bio";
import Skills from "./Skills/Skills";

//Родительски компонент для компонентов Bio и Skills
const About = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Bio />
        <Skills />
      </div>
    </>
  );
};

export default About;
