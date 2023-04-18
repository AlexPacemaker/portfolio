import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

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
