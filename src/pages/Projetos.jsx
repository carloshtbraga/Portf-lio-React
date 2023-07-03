import React from "react";
import "../styles/pages/projetos.sass";
import Trivia from "../img/trivia.png";
import tunes from "../img/tunes.png";
import wallet from "../img/wallet.png";
import solar from "../img/solar.png";
import triunfo from "../img/triunfo.png";
import pc from '../img/pc.png'
import pc2 from '../img/pc2.png'

function Projetos({ theme }) {
  return (
    <div className={theme === "dark" ? "exercicios1" : "exercicios1light"}>
      <h1>Projetos:</h1>
      <div className={theme === "dark" ? "exercicios2" : "exercicios2light"}>
      <a target="_blank" href="https:www.devs4good.com.br/">
          <img src={pc} alt="" />
        </a>
        <img src={pc2} alt="" />
        <a target="_blank" href="https://trivia-kohl.vercel.app/">
          <img src={Trivia} alt="" />
        </a>
        <img src={tunes} alt="" />
        <img src={wallet} alt="" />
        <img src={solar} alt="" />
        <img src={triunfo} alt="" />
      </div>
    </div>
  );
}

export default Projetos;
