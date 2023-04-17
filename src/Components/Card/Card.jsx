import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ title, imgUrl, description, description2, techs, refs }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2>{title}</h2>
        <img src={imgUrl} width={700} alt='portfolio' />
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
            <Link to={refs[0]} target='blank'>
              Проект на Github
            </Link>
            <Link to={refs[1]} target='blank'>
              Посмотреть проект на Github Pages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
