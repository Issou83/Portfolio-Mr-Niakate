import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { business } from "../data/business";
const ContactForm = () => {
  const form = useRef();
  const sending = useRef(false);
  const [status, setStatus] = useState("idle");
  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending.current) return;
    if (form.current.elements.website.value) return;
    if (!process.env.REACT_APP_ID) { setStatus("error"); return; }
    sending.current = true;
    setStatus("sending");
    try {
      await emailjs.sendForm("service_y36h74g", "template_wjeclvm", form.current, process.env.REACT_APP_ID);
      form.current.reset();
      setStatus("success");
    } catch { setStatus("error"); }
    finally { sending.current = false; }
  };
  return <div className="form-container"><h2>Votre projet</h2><form ref={form} onSubmit={sendEmail} className="form-content" aria-busy={status === "sending"}>
    <label htmlFor="name">Votre nom</label><input type="text" name="name" required autoComplete="name" id="name" maxLength={120} />
    <label htmlFor="email">Votre e-mail</label><input type="email" name="email" required autoComplete="email" id="email" maxLength={254} />
    <label htmlFor="mess">Votre besoin, en quelques mots</label><textarea name="message" id="mess" required maxLength={5000} placeholder="Votre activité, ce que vous souhaitez améliorer, votre délai…" />
    <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Laisser ce champ vide</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
    <p className="form-privacy">Vos coordonnées et votre message sont transmis via EmailJS pour répondre à votre demande. Vous pouvez aussi écrire directement à <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
    <button type="submit" className="contact-submit" disabled={status === "sending"}>{status === "sending" ? "Envoi en cours…" : "Envoyer mon message →"}</button>
  </form><div className="formMessage" role="status" aria-live="polite">{status === "success" && <p className="success">Message envoyé. Merci, je reviens vers vous pour échanger sur votre projet.</p>}{status === "error" && <p className="error">Le message n'a pas pu être envoyé. Réessayez ou contactez-moi directement par <a href={`mailto:${business.email}`}>e-mail</a> ou au <a href={`tel:${business.telephone}`}>{business.phoneLabel}</a>.</p>}</div></div>;
};
export default ContactForm;
