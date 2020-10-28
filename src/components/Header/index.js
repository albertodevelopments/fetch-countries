import React, { useContext } from 'react'

// Context
import AppContext from 'context/AppContext'

import './styles.scss'

const Header = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { appMode, changeAppMode } = useContext(AppContext)

    const handleChangeMode = () => {
        changeAppMode()
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <header
            className={`header ${
                appMode === 'Light' ? 'header-light' : 'header-dark'
            }`}
        >
            <h1 data-testid='title'>Where in the world?</h1>
            <div onClick={handleChangeMode}>
                {appMode === 'Light' ? (
                    <>
                        <i
                            data-testid='dark-mode-icon'
                            className='fas fa-moon'
                        ></i>
                        <span data-testid='light-mode-text'> Dark Mode</span>
                    </>
                ) : (
                    <>
                        <i
                            data-testid='light-mode-icon'
                            className='fas fa-sun'
                        ></i>
                        <span data-testid='light-mode-text'> Light Mode</span>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header
