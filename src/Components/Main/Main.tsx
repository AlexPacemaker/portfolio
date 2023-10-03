//необходимые импорты
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, setLoading } from "../../redux/slices/mainSlice";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Main.module.scss";
import { API_URL } from "../../config";
import ScrollToTopButton from "../ScrollToTop/ScrollToTop";
import { CardProps as ICard } from "../Card/Card.props";
import { RootState } from "../../redux/store";

//определение компонента
const Main: React.FC = () => {
  const { items, loading } = useSelector((state: RootState) => state.mainSlice);
  const dispatch = useDispatch();

  //ассинхронный запрос на бэк
  React.useEffect(() => {
    try {
      (async () => {
        if (API_URL)
          await axios(API_URL).then((res) => {
            //связывание с redux
            dispatch(setItems(res.data));
            dispatch(setLoading(false));
          });
      })();
    } catch (error) {
      console.log(error);
    }
    //eslint-disable-next-line
  }, []);

  const cardOutput = items.map((item: ICard) => <Card key={item.id} {...item} />);

  //Страница Main выводит данные (items) в виде карточек при их наличии и выводит сообщение загрузки (loading) на время получения данных.
  return (
    <div className={styles.container}>
      {loading ? <h2>Loading...</h2> : cardOutput}
      <div className={styles.scroll}>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Main;
