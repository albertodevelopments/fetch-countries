import React from 'react'

import './styles.scss'

const Header = () => {
    return (
        <header>
            <h1 data-testid='title'>Where in the world?</h1>
            <div>
                <i data-testid='dark-mode-icon' className='fas fa-moon'></i>
                <span data-testid='dark-mode-text'> Dark Mode</span>
            </div>
        </header>
    )
}

export default Header
