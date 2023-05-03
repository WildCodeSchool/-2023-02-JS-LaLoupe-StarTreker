import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "@components/Loading";
import PlanetCard from "../components/PlanetCard";
import bgimgplanet from "../assets/planetNebula.png";
import style from "../components/componentsCss/planetsPage.module.scss";

const getPlanet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState();

  useEffect(() => {
    axios
      .get(
        "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition%20like%20%27CANDIDATE%27%20and%20koi_period%3E150%20and%20koi_prad%3E0.2&format=json"
      )
      .then((response) => {
        setPlanets(response.data.slice(0, 70));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
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
