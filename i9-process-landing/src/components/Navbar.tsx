import React, { useState, useEffect } from "react";
import "../styles/style.css";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <h1>i9 Process</h1>

        {/* Menu padrão desktop */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => handleLinkClick("#hero")}>Início</a></li>
          <li><a onClick={() => handleLinkClick("#fluxos")}>Fluxos</a></li>
          <li><a onClick={() => handleLinkClick("#consultorias")}>Consultorias</a></li>
          <li><a onClick={() => handleLinkClick("#modulos")}>Módulos</a></li>
          <li><a onClick={() => handleLinkClick("#grupo")}>Grupo i9</a></li>
          <li className="mobile-button">
            <a onClick={() => handleLinkClick("#contato")} className="button">
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Botão mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Botão desktop */}
        <a href="#contato" className="button desktop-only">
          Fale Conosco
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
