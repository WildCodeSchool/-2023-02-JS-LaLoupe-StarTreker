import { Link } from "react-router-dom";
import style from "./componentsCss/PlanetButton.module.scss";
import planetimg from "../assets/Planet_Button.png";

function PlanetButton() {
  return (
    <div className={style.button}>
      <Link to="/planetes">
        <img src={planetimg} alt="" />
      </Link>
    </div>
  );
}

export default PlanetButton;
