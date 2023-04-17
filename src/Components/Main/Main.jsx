import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Main.module.scss";

const API_URL = "http://45.144.3.110:4444/portfolio";

const Main = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        await axios(API_URL).then((res) => {
          setItems(res.data);
          setLoading(false);
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cardOutput = items.map((item) => <Card key={item.id} {...item} />);

  return (
    <div className='container'>
      {loading ? <h2>Loading...</h2> : cardOutput}
    </div>
  );
};

export default Main;
