import React, { useContext, useEffect, useState } from "react";
import "./Myself.css";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { PortContext } from "../../context/PortContextProvider";
import { dynamiCss } from "../../global/dynamicCss";

const Myself = () => {
  const { activeLightTheme, setActiveLightTheme } = useContext(PortContext);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showtime = setTimeout(() => {
      setShowText((prevShowText) => !prevShowText);
    }, 2000);
    return () => {
      clearTimeout(showtime);
    };
  }, [showText]);
  return (
    <div className="main-container">
      {/* theme changing icons */}
      <div className="icons-container">
        {activeLightTheme ? (
          <span
            className="icons"
            onClick={() => setActiveLightTheme(!activeLightTheme)}
            style={{ color: dynamiCss.dark.second }}
          >
            <BiSolidMoon />
          </span>
        ) : (
          <span
            className="icons"
            onClick={() => setActiveLightTheme(!activeLightTheme)}
            style={{ color: dynamiCss.light.second }}
          >
            <BiSolidSun />
          </span>
        )}
      </div>
      {/* main data */}
      <div className="myself-container">
        {/* about paragraph */}
        <div className="text-container">
          <p
            className="myself-para"
            style={{ color: activeLightTheme ? "#000" : "#cfcbca" }}
          >
            Hi, I'm Sidd! <br />
            Creative{" "}
            {!showText && (
              <span
                style={{
                  color: activeLightTheme
                    ? dynamiCss.light.second
                    : dynamiCss.dark.second,
                }}
              >
                developer
              </span>
            )}{" "}
            {showText && (
              <span
                style={{
                  color: activeLightTheme
                    ? dynamiCss.light.second
                    : dynamiCss.dark.second,
                }}
              >
                Coder
              </span>
            )}
            . <br />
          </p>
          <p
            className="about-para"
            style={{
              color: activeLightTheme ? "#000" : "#cfcbca",
              width: "50%",
            }}
          >
            I'm a passionate Web developer with a mission to create delightful
            and intuitive digital experiences. With a strong foundation in
            coding principles and a keen eye for detail, I specialize in
            translating complex ideas into user-friendly interfaces that
            captivate and engage.
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/assets/sidd_resume.pdf`}
            download={"sidd_resume.pdf"}
            className="cv-a"
          >
            <button
              className="download-cv"
              style={{
                backgroundColor: activeLightTheme
                  ? dynamiCss.light.second
                  : dynamiCss.dark.second,
                color: activeLightTheme ? "white" : "black",
              }}
            >
              Download CV
            </button>
          </a>
        </div>

        <div className="pic-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/dc.jpg`}
            alt="my_pic"
            width={200}
            height={300}
            className="pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Myself;
