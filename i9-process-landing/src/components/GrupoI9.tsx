import React from "react";
import escritorioImg from "../assets/img/escritorio_i9.png";

const GrupoI9: React.FC = () => {
  return (
    <section id="grupo">
      <div className="grupo-content">
        <div className="grupo-texto">
          <h3>Fazemos parte do Grupo i9</h3>
          <p>
            O i9 Process integra o ecossistema de soluções empresariais do Grupo i9,
            referência em inovação e tecnologia corporativa.
          </p>
          <a
            href="https://www.i9process.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar site do Grupo i9
          </a>
        </div>

        <div className="grupo-imagem">
          <img src={escritorioImg} alt="Escritório do Grupo i9" />
        </div>
      </div>
    </section>
  );
};

export default GrupoI9;
