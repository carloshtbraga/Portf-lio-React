import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Exercicios from '../pages/Exercicios';
import Projetos from '../pages/Projetos';

function Rotas() {
    return (
        <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default Rotas;