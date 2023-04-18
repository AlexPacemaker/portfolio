import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems, setLoading } from "../../redux/slices/mainSlice";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Main.module.scss";

const API_URL = "http://45.144.3.110:4444/portfolio";

const Main = () => {
  const { items, loading } = useSelector((state) => state.mainSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      (async () => {
        await axios(API_URL).then((res) => {
          dispatch(setItems(res.data));
          dispatch(setLoading(false));
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cardOutput = items.map((item) => <Card key={item.id} {...item} />);

  return (
    <div className={styles.container}>
      {loading ? <h2>Loading...</h2> : cardOutput}
    </div>
  );
};

export default Main;
