import React, { useEffect, useState } from "react";
import { API_URL4 } from "../../../../config";
import axios from "axios";
import OtherSkillCard from "./OtherSkillCard/OtherSkillCard";
import styles from "./OtheSkills.module.scss";

const OtherSkills = () => {
  const [otherSkills, setOtherSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await axios.get(API_URL4).then((res) => {
        setOtherSkills(res.data);
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
        otherSkills.map((otherSkill) => (
          <OtherSkillCard key={otherSkill.id} {...otherSkill} />
        ))
      )}
    </div>
  );
};

export default OtherSkills;
