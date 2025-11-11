import React from "react";
import "../styles/style.css";
import checkIcon from "../assets/img/check_circle_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.svg";
import consultoriaImg from "../assets/img/Gemini_Generated_Image_4yzxpb4yzxpb4yzx.png"; // exemplo, troque pelo seu arquivo real

const Consultorias: React.FC = () => {
  const cards = [
    { titulo: "Mapeamento de processos" },
    { titulo: "Implantação assistida" },
    { titulo: "Análise de performance" },
  ];

  return (
    <section id="consultorias">
      <h3>Consultorias personalizadas</h3>
      <p>
        Nossas consultorias ajudam sua empresa a atingir máxima eficiência operacional.
      </p>

      <div className="consultorias-container">
        {/* Lado esquerdo: cards */}
        <div className="consultorias-cards">
          {cards.map((item, index) => (
            <div key={index} className="card-consultoria">
              <img src={checkIcon} alt="check" className="icone" />
              <h4>{item.titulo}</h4>
            </div>
          ))}
        </div>
        <div className="consultorias-imagem">
          <img src={consultoriaImg} alt="Equipe de consultoria" />
        </div>
      </div>
    </section>
  );
};

export default Consultorias;
