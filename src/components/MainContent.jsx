import React from 'react';
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';

function MainContent() {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
        </main>
    );
}

export default MainContent;