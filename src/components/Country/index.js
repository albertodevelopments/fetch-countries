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
    const appContext = useContext(AppContext)
    const history = useHistory()

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        population && formatPopulation(population)
    }, [population, formatPopulation])

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const handleClickCountry = () => {
        appContext && appContext.setCurrentCountry(country)

        /* Guardamos el país actual en el local storage para recuperarlos si
           refrescamos la página */
        localStorage.setItem('fetch-country-current', JSON.stringify(country))

        history.push(`/detail/${country.name}`)
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <article
            className={`country ${
                appContext && appContext.appMode === 'Light'
                    ? 'country-light'
                    : 'country-dark'
            }`}
            data-testid='country-card'
            onClick={handleClickCountry}
        >
            <img src={flag} alt={name} />
            <span className='name' data-testid='country-name'>
                {name}
            </span>
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
