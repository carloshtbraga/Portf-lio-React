import React from 'react';
import '../styles/components/socialnetworks.sass';
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const socialNetowkrs = [
    {name: 'linkedin', icon: <FaLinkedin />, url: "https://www.linkedin.com/in/carloshtbraga/"},
    {name: 'github', icon: <FaGithub />, url: 'https://github.com/carloshtbraga'},
    {name: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com'}
]

function SocialNetworks({theme}) {
    return (
        <section id={theme === 'dark' ? 'social-networks' : 'social-networkslight'}>
            {socialNetowkrs.map((e) => (
                <a href={e.url} target='_blank' className='social-btn' id={e.name} key={e.name}>
                    {e.icon}
                </a>
            ))}

        </section>
    );
}

export default SocialNetworks;