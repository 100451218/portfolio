import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form action="https://formspree.io/f/tu-endpoint" method="POST">
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
