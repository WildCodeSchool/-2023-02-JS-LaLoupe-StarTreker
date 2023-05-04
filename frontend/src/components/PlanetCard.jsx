// import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./componentsCss/PlanetCard.module.scss";

function PlanetCard({ planet }) {
  // const [card, setCard] = useState("unclicked");
  // const [infoPlanet, setInfoPlanet] = useState("hidden");
  // const [isArticleClicked, setIsArticleClicked] = useState(false);

  // const updateCard = (e) => {
  //   if (e.code === "Enter" || e.code === undefined) {
  //     if (!isArticleClicked) {
  //       setCard("clicked");
  //       setInfoPlanet("visible");
  //       // window.scrollTo({
  //       //   top: 0,
  //       //   behavior: "smooth",
  //       // });
  //     } else {
  //       setCard("unclicked");
  //       setInfoPlanet("hidden");
  //     }
  //     setIsArticleClicked(!isArticleClicked);
  //   }
  // };

  return (
    <Link to={`/planetes/${planet.kepid}`}>
      <div
        className={`${style.card}`}
        // onClick={updateCard}
        // onKeyDown={updateCard}
        role="button"
        tabIndex="0"
      >
        <div className={style.panel1}>
          <img
            className={style.image}
            src={`../src/assets/PlanetsImages/${planet.kepid}.png`}
            alt="Planète"
          />
        </div>
        <figcaption className={style.title}>
          <h2 className={style.titlePlanet1}>
            {planet.kepoi_name} - {planet.koi_teq}
          </h2>
        </figcaption>
      </div>
    </Link>
  );
}

PlanetCard.propTypes = {
  planet: PropTypes.string.isRequired,
  kepoi_name: PropTypes.string.isRequired,
  koi_teq: PropTypes.number.isRequired,
};

export default PlanetCard;
