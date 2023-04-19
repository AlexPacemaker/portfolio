import React from "react";
import styles from "./About.module.scss";
import axios from "axios";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setData } from "../../redux/slices/aboutSlice";

const About = () => {
  const { data, loading } = useSelector((state) => state.aboutSlice);
  const dispatch = useDispatch();

  const API_URL = "http://45.144.3.110:4444/portfolioAbout";

  React.useEffect(() => {
    try {
      (async () => {
        await axios.get(API_URL).then((res) => {
          dispatch(setData(res.data));
          dispatch(setLoading(false));
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const cleanData = DOMPurify.sanitize(data.message);

  return (
    <div>
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
          <div className={styles.text2}>
            <p>{data.message2}</p>
            <div>
              {data.message3.map((data) => {
                return (
                  <ul key={data}>
                    <li>{data}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
