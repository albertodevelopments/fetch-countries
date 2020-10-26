import React from 'react'

import './styles.scss'

const Header = () => {
    return (
        <header className='header'>
            <h1 data-testid='title'>Where in the world?</h1>
            <div>
                {/* <i data-testid='dark-mode-icon' className='fas fa-moon'></i> */}
                <i data-testid='light-mode-icon' className='fas fa-sun'></i>
                <span data-testid='light-mode-text'> Light Mode</span>
            </div>
        </header>
    )
}

export default Header
