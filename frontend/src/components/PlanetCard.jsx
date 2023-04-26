import { useState } from "react";
import style from "./componentsCss/PlanetCard.module.scss";
import tempimg from "../assets/Terrestrial-Habitable-Earth.png";

function PlanetCard() {
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
          <h2 className={style.titlePlanet1}>Earth</h2>
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
          <h2 className={style.titlePlanet2}>Earth</h2>
          <p className={style.information}>
            Earth, the only known planet with liquid water and hospitable
            conditions for life. Rotates on its axis every 24 hours, while
            revolving around the sun every 365 days. The only place in the
            universe where we have found life and a delicate balance of systems
            that make it habitable.
          </p>
          <ul className={style.characteristicList}>
            <li className={style.characteristic}>Terrestrial</li>
            <div className={style.bar} />
            <li className={style.characteristic}>Habitable</li>
            <div className={style.bar} />
            <li className={style.characteristic}>Civilization</li>
          </ul>
        </figcaption>
      </div>
    </>
  );
}

export default PlanetCard;
