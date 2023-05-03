import React, { useState } from "react";
import style from "../components/componentsCss/Support.module.scss";
import nebula from "../assets/nebula.png";

function Support() {
  const [formValues, setFormValues] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici vous pouvez effectuer une action telle qu'envoyer les données à un serveur

    // Réinitialiser les valeurs du formulaire
    setFormValues({
      nom: "",
      prenom: "",
      email: "",
      message: "",
    });

    // Afficher le message de confirmation
    setIsSubmitted(true);
  };

  return (
    <div className={style.container}>
      <img src={nebula} alt="Nebula" />
      <h2>Support</h2>
      <form name="support" onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          required
          value={formValues.nom}
          onChange={handleChange}
        />
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          name="prenom"
          required
          value={formValues.prenom}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formValues.email}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
        <button type="submit" onClick={() => setIsSubmitted(false)}>
          Envoyer
        </button>
      </form>

      {isSubmitted && (
        <div className={style.popup}>
          <p>Votre message a été envoyé avec succès !</p>
        </div>
      )}
    </div>
  );
}

export default Support;
