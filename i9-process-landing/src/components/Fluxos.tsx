import React from "react";

const Fluxos: React.FC = () => {
  const items = [
    "Automação completa",
    "Acompanhamento em tempo real",
    "Integração entre módulos"
  ];

  return (
    <section id="fluxos">
      <h3>Fluxos de aprovação inteligentes</h3>
      <p>
        Crie, gerencie e acompanhe fluxos de aprovação automatizados.
        O i9 Process garante agilidade, controle e visibilidade total.
      </p>

      <div className="grid md-grid-3">
        {items.map((item, index) => (
          <div key={index} className="card">
            <h4>{item}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fluxos;
