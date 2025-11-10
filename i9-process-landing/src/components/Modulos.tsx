import React from "react";

const modulos = [
  { nome: "Financeiro", emoji: "💰" },
  { nome: "RH", emoji: "👥" },
  { nome: "Compras", emoji: "🛒" },
  { nome: "Projetos", emoji: "📊" },
  { nome: "CRM", emoji: "🤝" }
];

const Modulos: React.FC = () => {
  return (
    <section id="modulos">
      <h3>Módulos de Gestão Empresarial</h3>
      <p>Cada módulo do i9 Process foi criado para impulsionar áreas estratégicas do seu negócio.</p>

      <div className="grid sm-grid-2 md-grid-3">
        {modulos.map(modulo => (
          <div key={modulo.nome} className="card">
            <span style={{ fontSize: "2rem" }}>{modulo.emoji}</span>
            <h4>{modulo.nome}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modulos;
