//необходимые импорты
import React from "react";
import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { CardProps } from "./Card.props";

//Создаем компонент Card, который принимает несколько пропсов
const Card = ({ title, imgUrl, description, description2, techs, refs }: CardProps): JSX.Element => {
  //Возвращаем JSX разметку, используя стили из модуля Card. Разметка содержит блок с заголовком и изображением проекта, а также блок с описанием проекта, технологиями и ссылками на Github и Github Pages.
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
          {/* В блоке с технологиями делаем маппинг по переданным в пропсе techs и выводим каждую в отдельном списке. */}
          {techs.map((tech) => (
            <ul key={tech}>
              <li>{tech}</li>
            </ul>
          ))}
          <div className={styles.links}>
            {/* В блоке с ссылками используем NavLink для создания кликабельных ссылок на Github и Github Pages. */}
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
