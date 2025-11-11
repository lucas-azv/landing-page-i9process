import React from "react";
import "../styles/style.css";

// Ícones
import iconFinanceiro from "../assets/img/payments_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconRH from "../assets/img/groups_3_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconCompras from "../assets/img/shopping_cart_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconProjetos from "../assets/img/view_kanban_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import iconCRM from "../assets/img/handshake_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";

// Imagens
import imgFinanceiro from "../assets/img/financeiro_image.jpg";
import imgRH from "../assets/img/rh_image.jpg";
import imgCompras from "../assets/img/compras_image.jpg";
import imgProjetos from "../assets/img/projetos_image.jpg";
import imgCRM from "../assets/img/crm_image.jpg";

const modulos = [
  {
    nome: "Financeiro",
    icon: iconFinanceiro,
    imagem: imgFinanceiro,
    descricao: "Controle completo de receitas, despesas e fluxo de caixa.",
    cor: "#2563eb",
  },
  {
    nome: "Recursos Humanos",
    icon: iconRH,
    imagem: imgRH,
    descricao: "Gestão de colaboradores, folhas de pagamento e desempenho.",
    cor: "#16a34a",
  },
  {
    nome: "Compras",
    icon: iconCompras,
    imagem: imgCompras,
    descricao: "Gerencie pedidos, fornecedores e orçamentos com agilidade.",
    cor: "#f59e0b",
  },
  {
    nome: "Projetos",
    icon: iconProjetos,
    imagem: imgProjetos,
    descricao: "Acompanhe tarefas, prazos e equipes em tempo real.",
    cor: "#9333ea",
  },
  {
    nome: "CRM",
    icon: iconCRM,
    imagem: imgCRM,
    descricao: "Fortaleça o relacionamento com clientes e aumente as vendas.",
    cor: "#dc2626",
  },
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
            <div
              className="modulo-top"
              style={{
                backgroundImage: `url(${modulo.imagem})`,
              }}
            >
              <div
                className="overlay"
                style={{ backgroundColor: modulo.cor }}
              ></div>
              <img src={modulo.icon} alt={modulo.nome} className="modulo-icon" />
            </div>

            <div className="modulo-bottom">
              <h4>{modulo.nome}</h4>
              <p>{modulo.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modulos;
