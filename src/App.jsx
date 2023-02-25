
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Rotas from './Routes/Rotas';

import './styles/components/app.sass';

function App() {
  return (
    <div id='portfolio'>
     <h1>Carlos Henrique Tonini Braga</h1>
     <Sidebar />
     <MainContent />
    </div>
    
  )
}

export default App
