import React from "react";

const Consultorias: React.FC = () => {
  const items = [
    "Mapeamento de processos",
    "Melhoria contínua",
    "Gestão por indicadores"
  ];

  return (
    <section id="consultorias">
      <h3>Consultorias de Processos</h3>
      <p>
        Nossas consultorias ajudam sua empresa a mapear, redesenhar e otimizar fluxos de trabalho,
        implementando boas práticas de gestão empresarial.
      </p>

      <div className="grid md-grid-3">
        {items.map((item, index) => (
          <div key={index} className="card">
            <h4>{item}</h4>
            <p>Soluções estratégicas para tornar seus processos mais eficientes.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Consultorias;
