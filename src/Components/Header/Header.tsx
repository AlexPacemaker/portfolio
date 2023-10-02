// Используется компонент NavLink из библиотеки react-router-dom для создания ссылок на разделы сайта. Компонент NavLink предоставляет навигационные ссылки, которые обновляют адресную строку URL и управляют историей браузера без перезагрузки страницы.
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

// Компонент Header возвращает контейнер с тремя навигационными ссылками на разделы "Портфолио", "Обо мне" и "GitHub".
const Header = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.slogan}>"Вижу цель - не вижу припятствия..."</p>
        <NavLink to='/'>Обо мне</NavLink>
        <NavLink to='/portfolio'>Портфолио</NavLink>
        <NavLink to='https://github.com/AlexPacemaker'>GitHub</NavLink>
      </div>
      <hr />
    </>
  );
};

export default Header;
