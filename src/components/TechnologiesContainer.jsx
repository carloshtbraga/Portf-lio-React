import React from 'react';
import {
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiJsBadge,
    DiMysql,
    DiReact,
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {name:'HTML5', icon: <DiHtml5 />},
    {name:'CSS3', icon: <DiCss3 />},
    {name:'JavaScript', icon: <DiJsBadge />},
    {name:'Node', icon: <DiNodejsSmall />},
    {name:'MySQL', icon: <DiMysql />},
    {name:'React', icon: <DiReact />}

]

function TechnologiesContainer() {
    return (
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                  <div 
                  className="technology-card" 
                  id={tech.name}
                  key={tech.name}>
                    {tech.icon}
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