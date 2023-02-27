import React from 'react';
import '../styles/components/header.sass';

function Header({theme}) {
    return (
            
          <h1 className={theme === 'dark' ? 'dark' :'light'}>Carlos Henrique Tonini Braga</h1>  
         
        
    );
}

export default Header;