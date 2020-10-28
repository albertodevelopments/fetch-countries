import React, { useContext } from 'react'

// Dependencias
import { useHistory } from 'react-router-dom'

// Context
import { AppContext } from 'context/AppContext'

const CountryButton = ({ country }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const history = useHistory()
    const { setCurrentCountry } = useContext(AppContext)

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const handleClickCountry = async () => {
        await setCurrentCountry(country)
        history.push(`/detail/${country.name}`)
    }

    if (!country) return null

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return <button onClick={handleClickCountry}>{country.name}</button>
}

export default CountryButton
