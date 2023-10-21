import React from "react";
import "../styles/pages/projetos.sass";
import Trivia from "../img/trivia.png";
import tunes from "../img/tunes.png";
import wallet from "../img/wallet.png";
import solar from "../img/solar.png";
import triunfo from "../img/triunfo.png";
import pc from '../img/pc.png'
import pc2 from '../img/pc2.png'
import Carrousel from "../components/Carrousel";
import github from '../img/github.png'

function Projetos({ theme }) {
  return (
    <div className={theme === "dark" ? "exercicios1" : "exercicios1light"}>
      <h1>Projetos:</h1>
      <div className={theme === "dark" ? "exercicios2" : "exercicios2light"}>
      {/* <a target="_blank" href="https:www.devs4good.com.br/">
          <img className='imgprojeto' src={pc} alt="" />
        </a>
        <img className='imgprojeto' src={pc2} alt="" />
        <a target="_blank" href="https://trivia-kohl.vercel.app/">
          <img className='imgprojeto' src={Trivia} alt="" />
        </a>
        <img className='imgprojeto' src={tunes} alt="" />
        <img className='imgprojeto' src={wallet} alt="" />
        <img className='imgprojeto' src={solar} alt="" />
        <img className='imgprojeto' src={triunfo} alt="" /> */}
        <Carrousel />
 <br />
       
        <h3><a href="https://github.com/carloshtbraga" target="_blank"><img className='git'src={github} alt=""/></a> Github é meu verdadeiro portfólio</h3>
      </div>
      
    </div>
  );
}

export default Projetos;
