import React from 'react';
import '../styles/components/informationcontainer.sass';
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

function InformationContainer({theme}) {
    return (
        <section id={theme === 'dark' ? 'information' : 'informationlight'}>
            <div className="info-card">
               <AiFillPhone id='phone-icon'/>
               <div>
                <h3>Telefone</h3>
                <p>(21) 99417-9229</p>
               </div>
            </div>
            <div className="info-card">
               <AiOutlineMail id='email-icon'/>
               <div>
                <h3>E-mail</h3>
                <p>carloshtbraga@gmail.com</p>
               </div>
            </div>
            <div className="info-card">
               <AiFillEnvironment id='pin-icon'/>
               <div>
                <h3>Localização</h3>
                <p>Rio de Janeiro - RJ</p>
               </div>
            </div>
        </section>
    );
}

export default InformationContainer;