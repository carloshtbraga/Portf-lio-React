import React from 'react';
import '../styles/components/socialnetworks.sass';
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const socialNetowkrs = [
    {name: 'linkedin', icon: <FaLinkedin />},
    {name: 'github', icon: <FaGithub />},
    {name: 'instagram', icon: <FaInstagram />}
]

function SocialNetworks() {
    return (
        <section id='social-networks'>
            {socialNetowkrs.map((e) => (
                <a href="" className='social-btn' id={e.name} key={e.name}>
                    {e.icon}
                </a>
            ))}

        </section>
    );
}

export default SocialNetworks;