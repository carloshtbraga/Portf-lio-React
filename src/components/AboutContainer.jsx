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

      <p>
        {en === "no"
          ? "Prazer! Obrigado pela visita! Tenho 37 anos e descobri minha paixão pela programação web após fazer um curso introdutório na Trybe. No momento sou aluno de Desenvolvimento Web na Trybe e estou fazendo um curso presencial de programação Web Python no Senac."
          : "Pleasure! Thank you for the visit! Im 37 years old and discovered my passion for web programming after taking an introductory course at Trybe. Im currently a Web Development student at Trybe and Im also taking an in-person Python Web Programming course at Senac"}
      </p>
    </section>
  );
}

export default AboutContainer;
