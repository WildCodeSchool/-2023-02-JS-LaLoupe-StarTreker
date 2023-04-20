import style from "@components/componentsCss/Support.module.scss";

function Support() {
  return (
    <div className={style.container}>
      <h2>Support</h2>
      <form name="support">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" />

        <label htmlFor="prenom">Prénom</label>
        <input type="text" name="prenom" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" />

        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Support;