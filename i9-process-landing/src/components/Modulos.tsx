import React from "react";
import "../styles/style.css";

// Importando ícones SVG
import iconFinanceiro from "../assets/img/payments_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconRH from "../assets/img/groups_3_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconCompras from "../assets/img/shopping_cart_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconProjetos from "../assets/img/view_kanban_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconCRM from "../assets/img/handshake_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";

const modulos = [
  { nome: "Financeiro", icon: iconFinanceiro },
  { nome: "RH", icon: iconRH },
  { nome: "Compras", icon: iconCompras },
  { nome: "Projetos", icon: iconProjetos },
  { nome: "CRM", icon: iconCRM },
];

const Modulos: React.FC = () => {
  return (
    <section id="modulos">
      <h3>Módulos de Gestão Empresarial</h3>
      <p>
        Cada módulo do i9 Process foi criado para impulsionar áreas estratégicas do seu negócio.
      </p>

      <div className="modulos-container">
        {modulos.map((modulo) => (
          <div key={modulo.nome} className="module-card">
            <img
              src={modulo.icon}
              alt={modulo.nome}
              className="modulo-icon"
            />
            <h4>{modulo.nome}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modulos;
