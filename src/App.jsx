
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react';


import './styles/components/app.sass';
import Header from './components/Header';

function App({theme,setTheme}) {
  


  return (
    <main>
    <div id={theme === 'dark' ? 'portfolio' : 'portfoliolight'}>
     <Header theme={theme}/>
     <Sidebar theme={theme} setTheme={setTheme}/>
     <MainContent theme={theme} setTheme={setTheme}/>
    </div>
    </main>
    
  )
}

export default App
