import React, { useContext } from "react";
import "./ProducCard.css";
import { PortContext } from "../../context/PortContextProvider";

const cardImages = [
  {
    id: 1,
    name: "CRYPTO-CURRENCY-APP",
    liveLink: "https://crypto-appi.netlify.app",
    imagePath: `${process.env.PUBLIC_URL}/assets/crypto.jpg`,
    repoLink: "https://github.com/siddshaikh/crypto-app-with-Firebase",
    description: `A crypto currency app that allows users to track the prices of various cryptocurrencies and make transactions. Tech stack: React.JS, Functional Components, Context API, Firebase, Material UI, Axios, Netlify`,
  },
  {
    id: 2,
    name: "NETFLIX-CLONE",
    liveLink: "https://netflix-clone-4afef.web.app/",
    imagePath: `${process.env.PUBLIC_URL}/assets/netflix.jpg`,
    repoLink: "https://github.com/siddshaikh/netflix-clone",
    description: `A Netflix clone app. Fetching data from TMDB Api Using axios fetch request. Tech Stack: React.js, Firebase, TMDB, axios`,
  },
  {
    id: 3,
    name: "QUIZ-APP",
    liveLink: "https://kbc-trivia.netlify.app",
    imagePath: `${process.env.PUBLIC_URL}/assets/quiz.jpg`,
    repoLink: "https://github.com/siddshaikh/kaun-banega-karodpati",
    description: `A quiz app its similar like (Kaun Banega Karodpati) Hindi show User can get 10 questios each quiestion has a four option if user give an correct answer he will get next question else h'll loose and get solved questions prize. Tech stack: React.js, SASS, Netlify, React-icons,Music`,
  },
  {
    id: 4,
    name: "RESTO-APP",
    liveLink: "https://resto-appi.netlify.app",
    imagePath: `${process.env.PUBLIC_URL}/assets/resto.jpg`,
    repoLink: "https://github.com/siddshaikh/zomato",
    description: `A restaurent app static website showing veg & Nonveg items mobile responsive with hamberger menu. Tech stack: React.JS, Material UI, Netlify `,
  },
];

const ProductCard = () => {
  const { dynamicColor } = useContext(PortContext);
  return (
    <div className="card-container">
      {cardImages.map((item) => (
        <a href={item.liveLink} target="_blank" rel="noreferrer" key={item.id}>
          <div className="card" style={{ borderColor: dynamicColor }}>
            <img src={item.imagePath} alt={item.name} className="card-pic" />
            <h5 className="card-title">{item.name}</h5>
            <a href={item.repoLink}>View Code</a>
            <p className="card-description">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProductCard;
