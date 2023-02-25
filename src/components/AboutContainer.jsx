import React from 'react';

function AboutContainer({theme}) {
    return (
        <section className={theme === 'dark' ? 'about-container': 'about-containerlight'}>
            <h2>Sobre</h2>
            <p>                
            Prazer! Obrigado pela visita! Tenho 37 anos e descobri minha paixão pela programação web após fazer um curso introdutório na Trybe. No momento sou aluno de Programação Web na Trybe e estou fazendo um curso presencial de programação Web Python no Senac.</p>
        </section>
    );
}

export default AboutContainer;