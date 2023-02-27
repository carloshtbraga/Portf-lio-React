import React from "react";
import "../styles/pages/exercicios.sass";
import form from "../img/form-redux-darkmode.png";

function Exercicios({ theme }) {
  return (
    <div className={theme === "dark" ? "exercicios1" : "exercicios1light"}>
      <h1>Exercícios da trybe upados:</h1>
      <div className={theme === "dark" ? "exercicios2" : "exercicios2light"}>
        <a target="_blank" href="https://form-test-beta.vercel.app/">
          <img src={form} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Exercicios;
