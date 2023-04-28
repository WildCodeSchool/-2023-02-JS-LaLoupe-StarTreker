import PlanetButton from "../components/PlanetButton";
import bgimg from "../assets/Map-Milky-Way.png";
import Search from "../components/Search";

function Gps() {
  return (
    <main>
      <img src={bgimg} alt="Milky Way" />
      <PlanetButton />
      <Search />
    </main>
  );
}

export default Gps;
