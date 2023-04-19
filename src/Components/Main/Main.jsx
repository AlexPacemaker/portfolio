//необходимые импорты
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, setLoading } from "../../redux/slices/mainSlice";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Main.module.scss";
import { API_URL } from "../../config";

//определение компонента
const Main = () => {
  const { items, loading } = useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();

  //ассинхронный запрос на бэк
  useEffect(() => {
    try {
      (async () => {
        await axios(API_URL).then((res) => {
          //связывание с redux
          dispatch(setItems(res.data));
          dispatch(setLoading(false));
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cardOutput = items.map((item) => <Card key={item.id} {...item} />);

  //Страница Main выводит данные (items) в виде карточек при их наличии и выводит сообщение загрузки (loading) на время получения данных.
  return (
    <div className={styles.container}>
      {loading ? <h2>Loading...</h2> : cardOutput}
    </div>
  );
};

export default Main;
