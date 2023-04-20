// import PlanetCard from "../components/PlanetCard";
import style from "../components/componentsCss/planetsPage.module.scss";

const planets = [
  { name: "planet1", color: "orange" },
  { name: "planet2", color: "purple" },
  { name: "planet3", color: "blue" },
  { name: "planet4", color: "brown" },
  { name: "planet5", color: "green" },
  { name: "planet6", color: "blue" },
  { name: "planet7", color: "purple" },
  { name: "planet8", color: "orange" },
  { name: "planet9", color: "green" },
  { name: "planet10", color: "brown" },
];

function Planets() {
  return (
    <div className={style.planetsPage}>
      <h2>Planètes</h2>
      <section>
        {planets.map((planet) => (
          <p>{planet.name}</p>
        ))}
      </section>
    </div>
  );
}

export default Planets;
