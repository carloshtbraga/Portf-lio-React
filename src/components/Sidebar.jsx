import SocialNetworks from "./SocialNetworks";
import Picture from "../img/carlos.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

import sun from "../img/Sun.svg";
import moon from "../img/Moon.svg";
import squid from "../img/squid.mp3";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ theme, setTheme }) {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const navigate = useNavigate();

  const handleclick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  function tocarMusica() {
    if (audioRef.current.paused) {
      audioRef.current.volume = volume;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <aside id={theme === "dark" ? "sidebar" : "sidebarlight"}>
      <img src={Picture} alt="Foto Carlos" className="foto" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks theme={theme} setTheme={setTheme} />
      <InformationContainer theme={theme} setTheme={setTheme} />
      <a href="" className={"btn"}>
        Download currículo
      </a>
      <button className="btn" onClick={() => navigate("/projetos")}>
        Ver projetos
      </button>
      <button onClick={() => navigate("/exercicios")} className="btn">
        Ver Exercícios
      </button>
      <button type="button" onClick={handleclick} className="btn2">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
        <img src={theme === "dark" ? sun : moon} alt="oi" className="sun" />
      </button>
      <button onClick={tocarMusica} className="btn2">
        Música ambiente
      </button>
      <br />
      <input
        id="range"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        onInput={(e) => (audioRef.current.volume = e.target.value)}
      />

      <audio ref={audioRef} src={squid} volume={volume} />
    </aside>
  );
}

export default Sidebar;
