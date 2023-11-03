import React, { useContext } from "react";
import "./Projects.css";
import { PortContext } from "../../context/PortContextProvider";
import ProductCard from "../Product-Card/ProductCard";

const shortProjects = [
  {
    id: 1,
    name: "User List",
    link: "https://polite-lollipop-e1295f.netlify.app/",
  },
  {
    id: 2,
    name: "Crud App",
    link: "https://crud-appi.netlify.app/",
  },
  {
    id: 3,
    name: "Shopping Cart",
    link: "https://crud-appi.netlify.app/",
  },
  {
    id: 4,
    name: "Todo With Drag & Drop",
    link: "https://todo-with-dnd.netlify.app/",
  },
  {
    id: 5,
    name: "Star rating",
    link: "https://github.com/siddshaikh/star-rating-react",
  },
  {
    id: 6,
    name: "Task Creater",
    link: "https://nkyt7l.csb.app/",
  },
  {
    id: 7,
    name: "Pagination",
    link: "https://3m6x6x.csb.app/",
  },
  {
    id: 8,
    name: "Random Password Generator",
    link: "https://8qvnnl.csb.app/",
  },
  {
    id: 9,
    name: "Progress Bar",
    link: "https://scintillating-beijinho-95454d.netlify.app/",
  },
  {
    id: 10,
    name: "color-grid",
    link: "https://94tgh4.csb.app/",
  },
];
const Projects = () => {
  const { dynamicColor } = useContext(PortContext);
  return (
    <div className="projects-container">
      <h1 className="projects-title" style={{ color: dynamicColor }}>
        My projects
      </h1>
      {/* project divided by category */}
      <div className="project__divider-container">
        {/* complex projects */}
        <div className="complex-projects">
          {/* project cards */}
          <h3 style={{ color: dynamicColor }} className="p-title">
            Large Projects
          </h3>
          <ProductCard />
        </div>
        {/* short projects */}
        <div className="short-projects">
          {/* project cards */}
          <h3 style={{ color: dynamicColor }} className="p-title">
            Short Projects
          </h3>
          <div className="short__project-wrapper">
            {shortProjects.map((item) => (
              <div
                key={item.id}
                className="short__project-card"
                style={{ borderColor: dynamicColor }}
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
