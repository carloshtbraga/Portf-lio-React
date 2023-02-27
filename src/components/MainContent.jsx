import React, { useState } from 'react';
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';

function MainContent({theme}) {
    const [en, setEn] = useState("no");
    return (
        <main id={theme === 'dark' ? 'main-content' : 'main-contentlight'}>
            <AboutContainer theme={theme} en={en} setEn={setEn}/>
            <TechnologiesContainer theme={theme} en={en}/>
        </main>
    );
}

export default MainContent;