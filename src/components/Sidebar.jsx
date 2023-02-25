import React from 'react';
import SocialNetworks from './SocialNetworks';
import Picture from '../img/carlos.jpeg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';


function Sidebar() {
    return (
        <aside id='sidebar'>
            <img src={Picture} alt="Foto Carlos" />
            <p className='title'>Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className='btn'>Download currículo</a>
            <br></br>
            <a href="" className='btn'>Ver Projetos</a>
        <br></br>
        <a href="/exercicios" className='btn'>Ver Exercícios</a>
        </aside>
    );
}

export default Sidebar;