import React from 'react';
import '../styles/pages/exercicios.sass'
import Trivia from '../img/trivia.png'
import tunes from '../img/tunes.png'
import wallet from '../img/wallet.png'
import solar from '../img/solar.png'
import triunfo from '../img/triunfo.png'

function Projetos() {
    return (
        <div className='exercicios1'>
            <h1>Projetos:</h1>
           <div className='exercicios2'>
            <div>

           <a target="_blank" href="https://trivia-kohl.vercel.app/">
            <img src={Trivia} alt="" />
            </a>
            <img src={tunes} alt="" />
            <img src={wallet} alt="" />
            <img src={solar} alt="" />
            <img src={triunfo} alt="" />
            </div>
    
           </div>
        </div>
    );
}

export default Projetos;

