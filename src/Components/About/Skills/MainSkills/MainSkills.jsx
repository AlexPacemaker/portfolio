import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL3 } from "../../../../config";
import MainSkillsCard from "./MainSkillsCard/MainSkillsCard";
import styles from "./MainSkills.module.scss";

const MainSkills = () => {
  const [mainSkills, setMainSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await axios.get(API_URL3).then((res) => {
        setMainSkills(res.data);
        setLoading(false);
        console.log(res.data);
      });
    })();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        mainSkills.map((mainSkill) => (
          <MainSkillsCard key={mainSkill.id} {...mainSkill} />
        ))
      )}
    </div>
  );
};

export default MainSkills;
