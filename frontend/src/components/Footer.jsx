import style from "./componentsCss/Footer.module.scss";
import PanelImg from "../assets/Panel_BG.jpg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.panel1} />
      <p className={style.footer}>©℗®™ Star Treker 2023</p>
      <button type="button" className={style.footer}>
        support
      </button>
      <img className={style.panelimg} src={PanelImg} alt="Stars Background" />
    </footer>
  );
}

export default Footer;
