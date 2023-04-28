import { useState } from "react";
import PropTypes from "prop-types";
import style from "./componentsCss/PlanetCard.module.scss";
import tempimg from "../assets/Terrestrial-Habitable-Earth.png";

function PlanetCard({ planet }) {
  const [card, setCard] = useState("unclicked");
  const [infoPlanet, setInfoPlanet] = useState("hidden");
  const [isArticleClicked, setIsArticleClicked] = useState(false);

  const updateCard = (e) => {
    if (e.code === "Enter" || e.code === undefined) {
      if (!isArticleClicked) {
        setCard("clicked");
        setInfoPlanet("visible");
      } else {
        setCard("unclicked");
        setInfoPlanet("hidden");
      }
      setIsArticleClicked(!isArticleClicked);
    }
  };

  return (
    <>
      <div
        className={`${style.card} ${style[card]}`}
        onClick={updateCard}
        onKeyDown={updateCard}
        role="button"
        tabIndex="0"
      >
        <div className={style.panel1}>
          <img className={style.image} src={tempimg} alt="Planet" />
        </div>
        <figcaption className={style.title}>
          <h2 className={style.titlePlanet1}>{planet.kepoi_name}</h2>
        </figcaption>
      </div>
      <div
        className={`${style.infoPlanet} ${style[infoPlanet]}`}
        onClick={updateCard}
        onKeyDown={updateCard}
        role="button"
        tabIndex="0"
      >
        <img className={style.imgPlanet} src={tempimg} alt="Planet" />
        <figcaption className={style.desc}>
          <h2 className={style.titlePlanet2}>{planet.kepoi_name}</h2>
          <p className={style.information}>
            Earth, the only known planet with liquid water and hospitable
            conditions for life. Rotates on its axis every 24 hours, while
            revolving around the sun every 365 days. The only place in the
            universe where we have found life and a delicate balance of systems
            that make it habitable.
          </p>
          <ul className={style.characteristicList}>
            <li className={style.characteristic}>
              Orbite en {planet.koi_period.toFixed(2)} jours
            </li>
            <div className={style.bar} />
            <li className={style.characteristic}>
              Diamètre : {planet.koi_prad} fois celui de la Terre
            </li>
            <div className={style.bar} />
            <li className={style.characteristic}>
              Température moyenne : {planet.koi_teq} Kelvin
            </li>
            <div className={style.bar} />
            <li className={style.characteristic}>
              Température de son étoile : {planet.steff} Kelvin
            </li>
            <div className={style.bar} />
            <li className={style.characteristic}>
              Diamètre de son étoile : {planet.koi_srad} fois celui du Soleil
            </li>
          </ul>
        </figcaption>
      </div>
    </>
  );
}

PlanetCard.propTypes = {
  planet: PropTypes.string.isRequired,
  kepoi_name: PropTypes.string.isRequired,
  koi_period: PropTypes.number.isRequired,
  koi_prad: PropTypes.number.isRequired,
  koi_teq: PropTypes.number.isRequired,
  steff: PropTypes.number.isRequired,
  koi_srad: PropTypes.number.isRequired,
};

export default PlanetCard;
