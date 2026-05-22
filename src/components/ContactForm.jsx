import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_y36h74g",
        "template_wjeclvm",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset();
          formMess.innerHTML =
            "<p class='success'>Message envoye ! <br>Je vous recontacte au plus vite</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4000);
        },
        (err) => {
          console.log(err.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez reessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Votre projet</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" required autoComplete="name" id="name" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          id="email"
        />
        <label htmlFor="mess">Objectif, delai, budget ou besoin principal</label>
        <textarea name="message" id="mess" required />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
