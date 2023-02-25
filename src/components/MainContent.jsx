import React from 'react';
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';

function MainContent({theme}) {
    return (
        <main id={theme === 'dark' ? 'main-content' : 'main-contentlight'}>
            <AboutContainer theme={theme}/>
            <TechnologiesContainer theme={theme}/>
        </main>
    );
}

export default MainContent;