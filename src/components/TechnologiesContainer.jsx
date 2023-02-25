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

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {name:'HTML5', icon: <DiHtml5 />},
    {name:'CSS3', icon: <DiCss3 />},
    {name:'JavaScript', icon: <DiJsBadge />},
    {name:'Node', icon: <DiNodejsSmall />},
    {name:'MySQL', icon: <DiMysql />},
    {name:'React', icon: <DiReact />},
    {name:'Sass', icon: <DiSass />},
    {name:'Python', icon: <DiPython />}

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