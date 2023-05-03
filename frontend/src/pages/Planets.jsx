import axios from "axios";
import { useState, useEffect } from "react";
import PlanetCard from "../components/PlanetCard";
import bgimgplanet from "../assets/planetNebula.png";
import style from "../components/componentsCss/planetsPage.module.scss";

const samplePlanet = {
  kepoi_name: "K00868.01",
  koi_period: 235.9986399,
  koi_prad: 10.59,
  koi_teq: 188,
  koi_steff: 4245,
  koi_srad: 0.657,
  koi_disposition: "CANDIDATE",
  koi_score: 0.998,
};

const getPlanet = () => {
  const [planets, setPlanets] = useState([samplePlanet]);
  useEffect(() => {
    axios
      .get(
        "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition%20like%20%27CANDIDATE%27%20and%20koi_period%3E150%20and%20koi_prad%3E0.2&format=json"
      )
      .then((response) => {
        // const planetImages = response.data.slice(0, 10).map((planet) => {
        //   const img = results.find((image) => image.id === planet.kepid)?.image;
        //   return { ...planet, image: img };
        // });
        const planetImages = response.data.slice(0, 70);
        setPlanets(planetImages);
      });
  }, []);

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
