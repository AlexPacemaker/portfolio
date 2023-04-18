import React from "react";
import styles from "./Card.module.scss";
import {NavLink } from "react-router-dom";

const Card = ({ title, imgUrl, description, description2, techs, refs }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.img} src={imgUrl} width={600} alt='portfolio' />
      </div>
      <div>
        <div className={styles.description}>
          <p>{description}</p>
          <br />
          <p>{description2}</p>
        </div>
        <div className={styles.techs}>
          {techs.map((tech) => (
            <ul key={tech}>
              <li>{tech}</li>
            </ul>
          ))}
          <div className={styles.links}>
            <NavLink className={styles.link} to={refs[0]} target='blank'>
              Проект на Github
            </NavLink>
            <NavLink className={styles.link} to={refs[1]} target='blank'>
              Посмотреть проект на Github Pages
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
