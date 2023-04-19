import React from "react";
import styles from "./ScrollToTop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "../../redux/slices/scrollSlice";

//компонент кнопки возврата в начало страницы
const ScrollToTopButton = () => {
  const { visible } = useSelector((state) => state.scrollSlice);
  const dispatch = useDispatch();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      dispatch(setVisible(true));
    } else if (scrolled <= 300) {
      dispatch(setVisible(false));
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
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        Наверх
      </button>
    </div>
  );
};

export default ScrollToTopButton;
