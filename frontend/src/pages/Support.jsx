import BurgerMenu from "@components/BurgerMenu";
import style from "@components/componentsCss/Support.module.scss";

const Support = () => {
  return (
    <div>
      <form name="support">
        <p>
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" />

          <label htmlFor="prenom">Prénom</label>
          <input type="text" name="prenom" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" />

          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </p>
      </form>
    </div>
  );
};

export default Support;
