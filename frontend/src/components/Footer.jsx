import style from "./componentsCss/Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.footer}>© Star Treker 2023</p>
      <button type="button" className={style.footer}>
        support
      </button>
    </footer>
  );
}

export default Footer;
