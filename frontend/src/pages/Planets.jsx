import PropTypes from "prop-types";
import PlanetCard from "../components/PlanetCard";
import bgimgplanet from "../assets/planetNebula.png";
import style from "../components/componentsCss/planetsPage.module.scss";

const Planets = ({ planets }) => {
  return (
    <>
      <img src={bgimgplanet} alt="Nebula with planet" className={style.bg} />
      <div className={style.planetsPage}>
        <h2>Planètes</h2>
        <section>
          {planets.map((planet) => (
            <PlanetCard key={`planet-${planet.kepid}`} planet={planet} />
          ))}
        </section>
      </div>
    </>
  );
};

Planets.propTypes = {
  planets: PropTypes.string.isRequired,
};

export default Planets;
