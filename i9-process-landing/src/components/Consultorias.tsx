import React from "react";
import "../styles/style.css";
import routeIcon from "../assets/img/route_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import rocketIcon from "../assets/img/rocket_launch_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import analyticsIcon from "../assets/img/analytics_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";

const Consultorias: React.FC = () => {
  const cards = [
    {
      titulo: "Mapeamento de processos",
      descricao:
        "Identificamos gargalos, padronizamos fluxos e otimizamos cada etapa para aumentar a eficiência operacional.",
      icone: routeIcon,
    },
    {
      titulo: "Implantação assistida",
      descricao:
        "Acompanhamos todo o processo de implementação garantindo aderência, capacitação e resultados consistentes.",
      icone: rocketIcon,
    },
    {
      titulo: "Análise de performance",
      descricao:
        "Monitoramos indicadores-chave e sugerimos melhorias contínuas baseadas em dados reais de desempenho.",
      icone: analyticsIcon,
    },
  ];

  return (
    <section id="consultorias">
      <h3>Consultorias personalizadas</h3>
      <p>
        Nossas consultorias ajudam sua empresa a atingir máxima eficiência operacional.
      </p>

      <div className="consultorias-container">
        {cards.map((item, index) => (
          <div key={index} className="consultoria-linha">
            {/* Ícone */}
            <div className="icone-wrapper">
              <div className="icone-fundo">
                <img src={item.icone} alt={item.titulo} className="icone" />
              </div>
            </div>

            {/* Card de texto */}
            <div className="card-consultoria">
              <div className="card-conteudo">
                <h4>{item.titulo}</h4>
                <p>{item.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Consultorias;
