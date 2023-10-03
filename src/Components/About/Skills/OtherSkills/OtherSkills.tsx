import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL4 } from "../../../../config";
import styles from "./OtheSkills.module.scss";
import { setLoading, setOtherSkills } from "../../../../redux/slices/otherSkillsSlice";
import { RootState } from "../../../../redux/store";
import OtherSkillsCard from "./OtherSkillsCard/OtherSkillsCard";

//получаем данные с бэками и отрисовываем карточки
const OtherSkills = () => {
  const { otherSkills, loading } = useSelector((state: RootState) => state.otherSkillsSlice);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      if (typeof API_URL4 === "string") {
        await axios.get(API_URL4).then((res) => {
          dispatch(setOtherSkills(res.data));
          dispatch(setLoading(false));
        });
      }
    })();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        otherSkills.map((otherSkill) => <OtherSkillsCard key={otherSkill.id} {...otherSkill} />)
      )}
    </div>
  );
};

export default OtherSkills;
