import React from "react";
import styles from "./ScrollToTop.module.scss";

//компонент кнопки возврата в начало страницы
const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={styles.scroll}>
      <button onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }}>
        Наверх
      </button>
    </div>
  );
};

export default ScrollToTopButton;
