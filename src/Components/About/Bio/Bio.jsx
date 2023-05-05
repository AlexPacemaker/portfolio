import React from "react";
import styles from "./Bio.module.scss";
import axios from "axios";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setData } from "../../../redux/slices/aboutSlice";
import { API_URL2 } from "../../../config";

const Bio = () => {
  const { data, loading } = useSelector((state) => state.aboutSlice);
  const dispatch = useDispatch();

  //Используется useEffect для отправки асинхронного запроса на бэкэнд, получения данных и установки состояния
  React.useEffect(() => {
    try {
      (async () => {
        await axios.get(API_URL2).then((res) => {
          //Используются функции из redux slices для обновления состояния с загруженными данными и выполненным загрузкой флагом
          dispatch(setData(res.data));
          dispatch(setLoading(false));
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Используется DOMPurify для удаления потенциально опасных элементов из HTML-кода, который будет отображаться в компоненте
  const cleanData = DOMPurify.sanitize(data.message);
  //Возвращается JSX для отображения разметки страницы About

  return (
    <>
      <div>
        {/*Если данные еще загружаются, отображается заголовок "Loading...", иначе отображается содержимое полученных данных с использованием стилей модуля About */}
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className={styles.container}>
              <img src={data.imgUrl} width={300} alt='some' />
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: cleanData }}
              ></div>
            </div>        
          </>
        )}
      </div>
    </>
  );
};

export default Bio;
