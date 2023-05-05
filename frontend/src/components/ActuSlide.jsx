import { useState } from "react";
import style from "./componentsCss/Actu.module.scss";
import nebula from "../assets/nebula.png";

const ActuSlide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [actuClass, setActuClass] = useState("hidden");

  const toggleSideBar = () => {
    if (!isOpen) {
      setActuClass("visible");
    } else {
      setActuClass("hidden");
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className={style.container}>
      <img src={nebula} alt="nebula" />
      <div className={`${style.actu} ${style[actuClass]}`}>
        <button
          type="button"
          onClick={toggleSideBar}
          className={style.actuButton}
        >
          <img src="src/assets/arrow2.png" alt="arrow" />
        </button>
        <div className={style.slide_content}>
          <h2>Actualités</h2>
          <ul>
            <li>
              Attention, un vaisseau a explosé aux alentours de HD 188753,
              constellation du Cygne. Des débris peuvent vous gêner lors de
              votre approche.
            </li>
            <li>
              La station de ravitaillement de Polaris est HS, veuillez
              anticiper.
            </li>
            <li>
              Des pirates rôdent à proximité de Mu Draconis, les forces de
              l’ordre sont sur place. N’intervenez pas.
            </li>
            <li>
              Une course de vaisseaux est programmée pour ce dimanche matin à Nu
              Scorpii. Les routes seront bloquées de 7h30 à 12h30.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActuSlide;
