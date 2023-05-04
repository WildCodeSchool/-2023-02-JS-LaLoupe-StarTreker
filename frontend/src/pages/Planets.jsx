// import { useParams } from "react";
import PlanetCard from "../components/PlanetCard";
import bgimgplanet from "../assets/planetNebula.png";
import style from "../components/componentsCss/planetsPage.module.scss";

const getPlanet = ({ planets }) => {
  // const id = parseInt(useParams().id, 10);
  // const planetWithId = planets.find((item) => item.kepid === id);
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

export default getPlanet;
