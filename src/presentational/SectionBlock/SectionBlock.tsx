import React from 'react';
import './SectionBlock.css';

interface SectionBlockProps {
    title: string
    subtitle: string
    html: string
    image: string
    background_color: string
}

const SectionBlock = ({title, subtitle, html, background_color}: SectionBlockProps) => (
    <section 
        className={'SectionBlock'}
        style={{ backgroundColor: background_color ? background_color : undefined }}
    >
        <div className={'SectionBlock-inner'}>
            {title && <h1>{title}</h1>}
            {subtitle && <h3>{subtitle}</h3>}
            {html && <div dangerouslySetInnerHTML={{__html: html}} />}
        </div>
    </section>
)

export default SectionBlock