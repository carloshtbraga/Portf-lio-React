import React, { useRef, useState } from "react";
import "../styles/components/aboutcontainer.sass";
import port from '../img/port.mp3'
import english from '../img/english.mp3'

function AboutContainer({ theme, en, setEn }) {
    const audioRef = useRef(null);
    function tocarMusica() {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
  
  return (
    <section
      className={theme === "dark" ? "about-container" : "about-containerlight"}
    >
      <div>
      <h2>{en === "no" ? "Sobre" : "About"}</h2>
      <button
        className='en'
        onClick={() => (en === "no" ? setEn("yes") : setEn("no"))}
      >
        {en === "no" ? "ENGLISH" : "PT-BR"}
      </button>
      <button className="en" onClick={tocarMusica}>{en === 'yes' ? 'Play' : 'Ouvir'}</button>
      </div>
      <audio ref={audioRef} src={en === 'yes' ? english : port}/>
      <br />

      
        {en === "no"
          ? <p> Prazer! Obrigado pela visita! Sou o Carlos, fundador da <a target="_blank" href="https://www.devs4good.com.br/">Devs4Good</a>, uma empresa sem fins lucrativos que cria sites e soluções para Ongs e projetos sociais. Sempre estive envolvido em projetos sociais e nessa minha jornada de desenvolvedor não seria diferente. Atualmente sou formado como full stack pela trybe e full stack em python pelo Senac RJ</p> 
          : <p> Nice to meet you! Thank you for visiting! I'm Carlos, the founder of <a href="https://www.devs4good.com.br/" target="_blank">Devs4Good</a>, a non-profit organization that creates websites and solutions for NGOs and social projects. I have always been involved in social projects, and on this journey as a developer, it is no different. Currently, I am a full-stack graduate from Trybe and also hold a full-stack Python certification from Senac RJ.</p> }
      
    </section>
  );
}

export default AboutContainer;
