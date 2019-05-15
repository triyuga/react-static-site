import React from 'react';
import './Socials.css';

interface SocialsProps {
    socials: SocialProps[]
}

interface SocialProps {
    url: string
    icon: string
    label: string
}

// const SectionBlock = ({title, subtitle, html, background_color}: SectionBlockProps) => (
const Socials = ({socials}: SocialsProps) => {
    console.log('socials', socials)
    return (
        <div className={'Socials'}>
            {socials && socials.map(({url, icon, label}, i: number) => (
                <a key={i} href={url}>
                    <img src={icon} alt={label}/>
                </a>
            ))}
        </div>
    )
}

export default Socials