import { useState } from "react";
import "./componentsCss/burgermenu.scss";

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = (e) => {
    if (e.code === "Enter" || e.code === undefined) {
      if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
      } else {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      }
      setIsMenuClicked(!isMenuClicked);
    }
  };

  return (
    <div>
      <nav>
        <div
          className="burger-menu"
          onClick={updateMenu}
          onKeyDown={updateMenu}
          role="button"
          tabIndex="0"
        >
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
      <div className={menuClass}>
        <ul>
          <li>
            <a href="actualites">ACTUALITÉS</a>
          </li>
          <li>
            <a href="planetes">PLANÈTES</a>
          </li>
          <li>
            <a href="support">SUPPORT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
