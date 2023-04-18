import style from "@components/componentsCss/Header.module.scss";
import BurgerMenu from "@components/BurgerMenu";
import PanelImg from "../assets/Panel_BG.jpg";
import Logo from "../assets/ST_Logo.png";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.panel1} />
      <div className={style.panel2} />
      <img className={style.logo} src={Logo} alt="Logo" />
      <h1 className={style.title}>
        Star <br />
        ‏‏‎ ‎ Treker
      </h1>
      <img className={style.panelimg} src={PanelImg} alt="Stars Background" />
      <BurgerMenu />
    </header>
  );
}

export default Header;
