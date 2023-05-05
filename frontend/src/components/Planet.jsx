import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import bgimgplanet from "../assets/planetNebula.png";
import style from "./componentsCss/Planet.module.scss";

function Planet({ planets }) {
  const id = parseInt(useParams().id, 10);
  const planet = planets.find((item) => item.kepid === id);

  return (
    <Link to="/planetes">
      <img src={bgimgplanet} alt="Nebula with planet" className={style.bg} />
      <div className={style.planetsPage}>
        <h2>Planètes</h2>
        <section
          className={`${style.infoPlanet} ${style.visible}`}
          role="button"
          tabIndex="0"
        >
          <img
            className={style.imgPlanet}
            src={`../src/assets/PlanetsImages/${planet.kepid}.png`}
            alt="Planet"
          />
          <figcaption className={style.desc}>
            <h2 className={style.titlePlanet2}>{planet.kepoi_name}</h2>

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
                Diamètre de son étoile : {planet.koi_srad} fois celui du Soleil
              </li>
              <div className={style.bar} />
              <li className={style.characteristic}>
                Température de son étoile : {planet.koi_steff} Kelvin
              </li>
            </ul>
          </figcaption>
        </section>
      </div>
    </Link>
  );
}

Planet.propTypes = {
  planets: PropTypes.string.isRequired,
};

export default Planet;
