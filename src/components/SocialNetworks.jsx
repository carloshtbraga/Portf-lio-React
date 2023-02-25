import React from 'react';
import '../styles/components/socialnetworks.sass';
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const socialNetowkrs = [
    {name: 'linkedin', icon: <FaLinkedin />},
    {name: 'github', icon: <FaGithub />},
    {name: 'instagram', icon: <FaInstagram />}
]

function SocialNetworks({theme}) {
    return (
        <section id={theme === 'dark' ? 'social-networks' : 'social-networkslight'}>
            {socialNetowkrs.map((e) => (
                <a href="https://www.linkedin.com/in/carloshtbraga/" target='_blank' className='social-btn' id={e.name} key={e.name}>
                    {e.icon}
                </a>
            ))}

        </section>
    );
}

export default SocialNetworks;