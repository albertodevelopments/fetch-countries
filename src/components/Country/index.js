import React, { useEffect, useContext } from 'react'

// Dependencias
import { useHistory } from 'react-router-dom'

// Hooks
import { useNumberFormat } from 'hooks/useNumberFormat'

// Context
import { AppContext } from 'context/AppContext'

import './styles.scss'

const Country = ({ country }) => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const { name, flag, population, region, capital } = country
    const { formattedPopulation, formatPopulation } = useNumberFormat(
        population
    )
    const { appMode, setCurrentCountry } = useContext(AppContext)
    const history = useHistory()

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        population && formatPopulation(population)
    }, [population])

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const handleClickCountry = () => {
        setCurrentCountry(country)
        history.push(`/detail/${country.name}`)
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <article
            className={`country ${
                appMode === 'Light' ? 'country-light' : 'country-dark'
            }`}
            data-testid='country-card'
            onClick={handleClickCountry}
        >
            <img src={flag} />
            <span className='name'>{name}</span>
            <span className='info'>
                <strong>Population:</strong> {formattedPopulation}
            </span>
            <span className='info'>
                <strong>Region:</strong> {region}
            </span>
            <span className='info'>
                <strong>Capital:</strong> {capital}
            </span>
        </article>
    )
}

export default Country
