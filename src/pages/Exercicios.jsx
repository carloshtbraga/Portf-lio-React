import React from 'react';
import '../styles/pages/exercicios.sass'
import form from '../img/form-redux-darkmode.png'

function Exercicios() {
    return (
        <div className='exercicios1'>
            <h1>Exercícios da trybe upados:</h1>
           <div className='exercicios2'>
           <a target="_blank" href="https://form-test-beta.vercel.app/"><img src={form} alt="" /></a>
           </div>
        </div>
    );
}

export default Exercicios;