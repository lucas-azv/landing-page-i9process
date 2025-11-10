import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fluxos from "./components/Fluxos";
import Consultorias from "./components/Consultorias";
import Modulos from "./components/Modulos";
import GrupoI9 from "./components/GrupoI9";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Fluxos />
      <Consultorias />
      <Modulos />
      <GrupoI9 />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;
