import React from 'react';
import {
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiJsBadge,
    DiMysql,
    DiReact,
    DiPython,
    DiSass,
} from 'react-icons/di';

import Python from '../img/python.png'
import HTML from '../img/html.png'
import CSS from '../img/css-3.png'
import GitHub from '../img/github-sign.png'
import Node from '../img/node-js.png'
import Sass from '../img/sass.png'
import JS from '../img/java-script.png'
import Reacti from '../img/structure.png'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {name:'HTML5', icon: HTML},
    {name:'CSS3', icon: CSS},
    {name:'JavaScript', icon: JS},
    {name:'Node', icon: Node},
    {name:'GitHub', icon: GitHub},
    {name:'React', icon: Reacti},
    {name:'Sass', icon: Sass},
    {name:'Python', icon: Python}

]


function TechnologiesContainer({theme}) {
    return (
        <section className={theme === 'dark' ?'technologies-container' : 'technologies-containerlight'}>
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                  <div 
                  className="technology-card" 
                  id={tech.name}
                  key={tech.name}>
                    <img src={tech.icon} alt={tech.name} />
                    <div className='technology-info'>
                        <h3>{tech.name}</h3>
                    </div>
                  </div>  
                ))}
            </div>
        </section>
    );
}

export default TechnologiesContainer;