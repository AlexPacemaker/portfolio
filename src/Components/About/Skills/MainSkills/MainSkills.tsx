import axios from "axios";
import React from "react";
import { API_URL3 } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setMainSkills } from "../../../../redux/slices/mainSkillsSlice";
import MainSkillsCard from "./MainSkillsCard/MainSkillsCard";
import styles from "./MainSkills.module.scss";
import { RootState } from "../../../../redux/store";

//компонент получения с бэка данных по основным скилам и отрисовка карточке со скилами
const MainSkills = () => {
  const { mainSkills, loading } = useSelector((state: RootState) => state.mainSkillsSlice);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      if (typeof API_URL3 === "string") {
        await axios.get(API_URL3).then((res) => {
          dispatch(setMainSkills(res.data));
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
        mainSkills.map((mainSkill) => <MainSkillsCard key={mainSkill.id} {...mainSkill} />)
      )}
    </div>
  );
};

export default MainSkills;
