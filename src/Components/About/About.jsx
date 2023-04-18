import React from "react";
import alex from "../../Assets/Img/alex.png";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <img src={alex} width={400} height={400} alt='self_picture' />
      <div className={styles.text}>
        <p>
          Привет, меня зовут Александр! Я уже несколько лет занимаюсь изучением
          <strong> HTML 5, CSS 3</strong>. В течение последнего года я успешно
          освоил <strong>JavaScript 6/7/8+</strong>, а затем{" "}
          <strong>React 18, Redux/Redux Toolkit и Router 6. </strong>Сейчас
          изучаю <strong>Vue 3</strong>. И, хотя хочу развиваться в направлении
          frontend, я также испытываю интерес к backend. В настоящее время
          развернул на персональном VPS свой сервер при помощи технологии
          <strong> express.js</strong>, с которого раздаю по API данные для
          своих приложений. В своих проектах я реализовал навыки, полученные при
          самостоятельном обучении, и готов использовать их в работе в
          продуктовой IT-компании. Моей целью является продолжение
          профессионального роста и принесение пользы компании, которая возьмет
          меня на работу. Буду рад сотрудничеству с Вами и ответственно подойду
          к выполнению своих обязанностей.
        </p>
        <br />
        <p>Также знаком и пременял(применяю) следующие технологии:</p>
        <br />
        <ul>
          <li>- Flexbox</li>
          <li>- Grid</li>
          <li>- БЭМ</li>
          <li>- Адаптивная кроссбраузерная/верстка</li>
          <li>- SASS/SCSS/Less</li>
          <li>- Git/Github</li>
          <li>- axios/fetch</li>
          <li>- webpack</li>
          <li>- MERN</li>
          <li>- Insomnia/Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
