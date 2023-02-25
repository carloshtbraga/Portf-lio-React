
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react';


import './styles/components/app.sass';

function App() {
  const [theme, setTheme] = useState('dark')


  return (
    <div id={theme === 'dark' ? 'portfolio' : 'portfoliolight'}>
     <h1>Carlos Henrique Tonini Braga</h1>
     <Sidebar theme={theme} setTheme={setTheme}/>
     <MainContent theme={theme} setTheme={setTheme}/>
    </div>
    
  )
}

export default App
