import React, { createContext, useState } from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [appMode, setAppMode] = useState('dark')
    const [currentCountry, setCurrentCountry] = useState('')

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const changeAppMode = () => {
        if (appMode === 'Light') {
            setAppMode('Dark')
        } else {
            setAppMode('Light')
        }
    }

    return (
        <AppContext.Provider
            value={{
                appMode,
                currentCountry,
                setCurrentCountry,
                changeAppMode,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
