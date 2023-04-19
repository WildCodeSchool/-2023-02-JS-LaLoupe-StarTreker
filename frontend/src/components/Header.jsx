import style from "@components/componentsCss/Header.module.scss";
import BurgerMenu from "@components/BurgerMenu";
import Logo from "../assets/ST_Logo.png";

function Header() {
  return (
    <header className={style.header}>
      <img className={style.header} src={Logo} alt="Logo" />
      <h1 className={style.header}>Star Treker</h1>
      <BurgerMenu />
      <section className={style.header}>
        <section>
          <div className={style.header} />
          <div className={style.header} />
        </section>
        <section>
          <div className={style.header} />
          <div className={style.header} />
        </section>
      </section>
    </header>
  );
}

export default Header;
