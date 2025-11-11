import React from "react";
import "../styles/style.css";

const Fluxos: React.FC = () => {
  const cards = [
    {
      titulo: "Automação completa",
      texto: "Elimine tarefas manuais e acelere decisões com fluxos 100% automatizados.",
    },
    {
      titulo: "Acompanhamento em tempo real",
      texto: "Monitore aprovações e status em tempo real, com alertas inteligentes.",
    },
    {
      titulo: "Integração entre módulos",
      texto: "Garanta consistência de dados conectando todos os setores da empresa.",
    },
  ];

  return (
    <section id="fluxos">
      <h3>Fluxos de aprovação inteligentes</h3>
      <p>
        Crie, gerencie e acompanhe fluxos de aprovação automatizados.
        O i9 Process garante agilidade, controle e visibilidade total.
      </p>

      <div className="grid md-grid-3">
        {cards.map((item, index) => (
          <div key={index} className="card">
            <h4>{item.titulo}</h4>
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fluxos;
