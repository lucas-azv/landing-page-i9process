import React, { useState } from "react";
import Toast from "./Toast";

const Contato: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simulação de envio
    setTimeout(() => {
      setToast({
        message: "Mensagem enviada com sucesso! (simulação)",
        type: "success",
      });
    }, 600);
  };

  return (
    <section id="contato">
      <h3>Entre em contato</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contato;
