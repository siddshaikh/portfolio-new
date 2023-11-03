import React, { useContext, useEffect, useState } from "react";
import "./skills.css";
import { PortContext } from "../../context/PortContextProvider";

const techSkills = [
  { id: 1, skill: "HTML", percent: 95 },
  { id: 2, skill: "CSS", percent: 85 },
  { id: 3, skill: "MATERIAL UI", percent: 80 },
  { id: 4, skill: "TAILWIND CSS", percent: 85 },
  { id: 5, skill: "JAVASCRIPT", percent: 85 },
  { id: 6, skill: "REACT.JS", percent: 80 },
  { id: 7, skill: "TYPESCRIPT", percent: 70 },
  { id: 8, skill: "NEXT.JS", percent: 60 },
  { id: 9, skill: "EXPRESS.JS", percent: 50 },
  { id: 10, skill: "MONGO DB", percent: 50 },
];
const otherSkills = [
  "Redux and Redux Toolkit",
  "Git & Github",
  "Firebase V9",
  "Basic DSA",
  "Figma",
  "Chart.Js",
];
const Skills = () => {
  // const [skillBarWidth, setSkillBarWidth] = useState(0);

  // useEffect(() => {
  //   let widthTime;
  //   for (let w = 0; w <= techSkills.percent.length; w++) {
  //     if (skillBarWidth <= w) {
  //       widthTime = setInterval(() => {
  //         setSkillBarWidth((prevWidth) => prevWidth + 1);
  //       }, 100);
  //     } else {
  //       clearInterval(widthTime);
  //     }
  //   }

  //   return () => {
  //     clearInterval(widthTime);
  //   };
  // }, [skillBarWidth]);

  const { dynamicColor, activeLightTheme } = useContext(PortContext);

  return (
    <div
      className="skills-container"
      style={{ backgroundColor: activeLightTheme ? "" : "black" }}
    >
      <h1 className="skill-title" style={{ color: dynamicColor }}>
        My Skills
      </h1>
      {/* skills wrapper */}
      <div className="skills-wrapper">
        {/* skill like progress bar */}
        <div>
          <h2 className="skill-title" style={{ color: dynamicColor }}>
            Main Tech Stack
          </h2>
          {techSkills.map((tech) => (
            <div key={tech.id}>
              <p className="skill-title" style={{ color: dynamicColor }}>
                {tech.skill}
              </p>
              <div className="skill__bar-container">
                <span
                  className="skill-bar"
                  style={{
                    width: `${tech.percent}%`,
                    backgroundColor: dynamicColor,
                  }}
                >
                  {tech.percent}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* other skills */}
        <div>
          <h2 className="skill-title" style={{ color: dynamicColor }}>
            Other Skills
          </h2>
          {otherSkills.map((item) => (
            <p key={item} style={{ color: dynamicColor, fontSize: "2rem" }}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
