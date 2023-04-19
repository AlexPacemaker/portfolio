import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

//компонент возвращает страницу с jsx разметкой, если такой страницы на сайте нет
const NotFound = () => {
  return (
    <div className={styles.container}>
      <span>😕</span>
      <h2>К сожалению тут ничего нет :(</h2>
      <p>Здесь отсутствует такая страница</p>
      <button>
        <Link to='/'>Назад</Link>{" "}
      </button>
    </div>
  );
};

export default NotFound;
