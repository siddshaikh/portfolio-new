import React, { useContext, useState } from "react";
import "./Main.css";
import Myself from "../components/Myself/Myself";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { PortContext } from "../context/PortContextProvider";
import { dynamiCss } from "../global/dynamicCss";

const Main = () => {
  const [hoverNav, setHoverNav] = useState({
    Myself: false,
    Projects: false,
    Skills: false,
    Contact: false,
  });
  const { activeLightTheme } = useContext(PortContext);
  const handleHoverNav = (value) => {
    setHoverNav((prevHoverNav) => ({
      ...prevHoverNav,
      [value]: true,
    }));
  };

  return (
    <div className="main-conainer">
      {/* card bar */}
      <div
        className="card-bar"
        style={{
          color: activeLightTheme
            ? dynamiCss.light.first
            : dynamiCss.dark.first,
          backgroundColor: activeLightTheme
            ? dynamiCss.light.second
            : dynamiCss.dark.second,
        }}
      >
        Portfolio
      </div>
      {/* navigation menu */}
      <div
        className="nav-container"
        style={{
          color: activeLightTheme
            ? dynamiCss.light.second
            : dynamiCss.dark.second,
        }}
      >
        <h1 className="title">Sidd</h1>
        <ul className="nav__list">
          <li
            className="nav__list-items"
            onMouseOver={() => handleHoverNav("Myself")}
            style={{
              borderColor: activeLightTheme
                ? dynamiCss.light.first
                : dynamiCss.dark.first,
            }}
          >
            Myself
          </li>
          <li
            className="nav__list-items"
            onMouseOver={() => handleHoverNav("Projects")}
          >
            Projects
          </li>
          <li
            className="nav__list-items"
            onMouseOver={() => handleHoverNav("Skills")}
          >
            Skills
          </li>
          <li
            className="nav__list-items"
            onMouseOver={() => handleHoverNav("Contact")}
          >
            Contact Me
          </li>
        </ul>
      </div>
      {/* components with ref for scrolling */}
      <div
        style={{
          backgroundColor: activeLightTheme
            ? dynamiCss.light.first
            : dynamiCss.dark.first,
        }}
      >
        <div>
          <Myself />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
