import React from 'react'
import './style.scss'

export const Navbar = () => {
    return (
        <nav className='navbar' data-test='navbar'>
            <h1 className='logo' data-test='logo'>Logo</h1>
        </nav>
    )
}
