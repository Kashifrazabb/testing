import React from 'react'
import './style.scss'

export const Headline = ({ title, desc }) => {

    if (!title) {
        return null
    }

    return (
        <div className='headline' data-test='headline'>
            <h1 data-test='headlineTitle'>{title}</h1>
            <h4 data-test='headlineDesc'>{desc}</h4>
        </div>
    )
}
