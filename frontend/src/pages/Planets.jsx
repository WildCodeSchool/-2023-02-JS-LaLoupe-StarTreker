import PlanetCard from "../components/PlanetCard";
import bgimgplanet from "../assets/planetNebula.png";
import style from "../components/componentsCss/planetsPage.module.scss";

const planets = [
  <PlanetCard />,
  <PlanetCard />,
  <PlanetCard />,
  <PlanetCard />,
];

function Planets() {
  return (
    <>
      <img src={bgimgplanet} alt="Nebula with planet" className={style.bg} />
      <div className={style.planetsPage}>
        <h2>Planètes</h2>
        <section>
          {planets.map(() => (
            <PlanetCard />
          ))}
        </section>
      </div>
    </>
  );
}

export default Planets;
