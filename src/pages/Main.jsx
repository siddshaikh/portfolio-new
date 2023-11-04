import React, { useContext, useRef } from "react";
import "./Main.css";
import Myself from "../components/Myself/Myself";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { PortContext } from "../context/PortContextProvider";
import { dynamiCss } from "../global/dynamicCss";

const Main = () => {
  const navRefs = {
    Myself: useRef(null),
    Projects: useRef(null),
    Skills: useRef(null),
    Contact: useRef(null),
  };
  const { activeLightTheme } = useContext(PortContext);

  const moveToTab = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        <h1 className="title" onClick={() => moveToTab(navRefs.Myself)}>
          Sidd
        </h1>
        <ul className="nav__list">
          <li
            className="nav__list-items"
            onClick={() => moveToTab(navRefs.Myself)}
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
            onClick={() => moveToTab(navRefs.Projects)}
          >
            Projects
          </li>
          <li
            className="nav__list-items"
            onClick={() => moveToTab(navRefs.Skills)}
          >
            Skills
          </li>
          <li
            className="nav__list-items"
            onClick={() => moveToTab(navRefs.Contact)}
          >
            Contact Me
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundColor: activeLightTheme
            ? dynamiCss.light.first
            : dynamiCss.dark.first,
        }}
        className="components"
      >
        <div ref={navRefs.Myself}>
          <Myself />
        </div>
        <div ref={navRefs.Projects} style={{ marginTop: "200px" }}>
          <Projects />
        </div>
        <div ref={navRefs.Skills}>
          <Skills />
        </div>
        <div ref={navRefs.Contact} style={{ marginTop: "200px" }}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
