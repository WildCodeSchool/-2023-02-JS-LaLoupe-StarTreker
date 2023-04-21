import { Link } from "react-router-dom";
import style from "./componentsCss/Footer.module.scss";
import PanelImg from "../assets/Panel_BG.jpg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.panel1} />
      <p className={style.footer}>©℗®™ Star Treker 2023</p>

      <Link className={style.supp} to="/support">
        <p>support</p>
      </Link>

      <img className={style.panelimg} src={PanelImg} alt="Stars Background" />
    </footer>
  );
}

export default Footer;
