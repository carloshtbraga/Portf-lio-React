import SocialNetworks from './SocialNetworks';
import Picture from '../img/carlos.jpeg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

import sun from '../img/Sun.svg'
import moon from '../img/Moon.svg'


function Sidebar({theme, setTheme}) {
    

    const handleclick = () => {
       theme === 'dark' ? setTheme('light') : setTheme('dark')

    }

    return (
        <aside id={theme === 'dark' ? 'sidebar' : 'sidebarlight'}>
            <img src={Picture} alt="Foto Carlos" className='foto' />
            <p className='title'>Desenvolvedor</p>
            <SocialNetworks theme={theme} setTheme={setTheme}/>
            <InformationContainer theme={theme} setTheme={setTheme}/>
            <a href="" className={'btn'}>Download currículo</a>
            <br></br>
            <a href="/projetos" className='btn'>Ver Projetos</a>
        <br></br>
        <a href="/exercicios" className='btn'>Ver Exercícios</a>
        <button
         type='button'
         onClick={handleclick}
         >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}  
         <img src={theme === 'dark' ? sun : moon} alt="oi" className='sun'/>
         </button>
        </aside>
    );
}

export default Sidebar;