import React from "react";
import "../styles/style.css";
import checkIcon from "../assets/img/check_circle_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";

const Consultorias: React.FC = () => {
  const cards = [
    {
      titulo: "Mapeamento de processos",
      descricao:
        "Identificamos gargalos, padronizamos fluxos e otimizamos cada etapa para aumentar a eficiência operacional."
    },
    {
      titulo: "Implantação assistida",
      descricao:
        "Acompanhamos todo o processo de implementação garantindo aderência, capacitação e resultados consistentes."
    },
    {
      titulo: "Análise de performance",
      descricao:
        "Monitoramos indicadores-chave e sugerimos melhorias contínuas baseadas em dados reais de desempenho."
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
                <img src={checkIcon} alt="check" className="icone" />
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
