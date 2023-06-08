import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Skills = () => {
  return (
    <>
      <div>
      <p className={`${styles.sectionSubText} `}>My Knowledge</p>
        <p className={`${styles.sectionHeadText} `}>Skills</p>
      </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
      </>
  );
};

export default SectionWrapper(Skills, "skills");