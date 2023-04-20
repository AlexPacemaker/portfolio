import axios from "axios";
import React, { useEffect, useState } from "react";

const Main2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        await axios.get("/pizza").then((res) => {
          setData(res.data);
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Main2;
