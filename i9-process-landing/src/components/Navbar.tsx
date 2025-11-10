import React, { useState, useEffect } from "react";
import "../styles/style.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <h1>i9 Process</h1>
        <ul>
          <li><a href="#hero">Início</a></li>
          <li><a href="#fluxos">Fluxos</a></li>
          <li><a href="#consultorias">Consultorias</a></li>
          <li><a href="#modulos">Módulos</a></li>
          <li><a href="#grupo">Grupo i9</a></li>
        </ul>
        <a href="#contato" className="button">Fale Conosco</a>
      </nav>
    </header>
  );
};

export default Navbar;
