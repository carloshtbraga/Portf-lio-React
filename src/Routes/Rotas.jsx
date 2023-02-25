import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Exercicios from '../pages/Exercicios';

function Rotas() {
    return (
        <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/exercicios" element={<Exercicios />} />
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default Rotas;