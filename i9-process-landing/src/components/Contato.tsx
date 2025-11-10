import React from "react";

const Contato: React.FC = () => {
  return (
    <section id="contato">
      <h3>Entre em contato</h3>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
