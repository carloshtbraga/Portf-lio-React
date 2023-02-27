import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Exercicios from '../pages/Exercicios';
import Projetos from '../pages/Projetos';

function Rotas() {
  const [theme, setTheme] = useState('light')
    return (
        <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App theme={theme} setTheme={setTheme}/>} />
        <Route path="/exercicios" element={<Exercicios theme={theme} setTheme={setTheme}/>} />
        <Route path="/projetos" element={<Projetos theme={theme} setTheme={setTheme}/>} />
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default Rotas;