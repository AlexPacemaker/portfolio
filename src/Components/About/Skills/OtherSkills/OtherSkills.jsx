import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL4 } from "../../../../config";
import OtherSkillCard from "./OtherSkillCard/OtherSkillCard";
import styles from "./OtheSkills.module.scss";
import {
  setLoading,
  setOtherSkills,
} from "../../../../redux/slices/otherSkillsSlice";

//получаем данные с бэками и отрисовываем карточки
const OtherSkills = () => {
  const { otherSkills, loading } = useSelector(
    (state) => state.otherSkillsSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await axios.get(API_URL4).then((res) => {
        dispatch(setOtherSkills(res.data));
        dispatch(setLoading(false));
        console.log(res.data);
      });
    })();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        otherSkills.map((otherSkill) => (
          <OtherSkillCard key={otherSkill.id} {...otherSkill} />
        ))
      )}
    </div>
  );
};

export default OtherSkills;
