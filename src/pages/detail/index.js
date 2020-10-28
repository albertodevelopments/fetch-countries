import React, { useEffect, useState, useContext } from 'react'

// Context
import { AppContext } from 'context/AppContext'

// Dependencias
import { useHistory } from 'react-router-dom'

// Servicios
import { fetchBorderCountries } from 'services/RESTClient'

// Hooks
import { useNumberFormat } from 'hooks/useNumberFormat'

// Componentes
import AppLayout from 'components/AppLayout'
import CountryButton from 'components/CountryButton'

import './styles.scss'

const Detail = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const history = useHistory()
    const [country, setCountry] = useState({
        name: '',
        nativeName: '',
        flag: '',
        population: 0,
        region: '',
        subregion: '',
        capital: '',
        topLevelDomain: '',
        currencies: [],
        languages: [],
    })

    const {
        name,
        nativeName,
        flag,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = country

    const { appMode, currentCountry, setCurrentCountry } = useContext(
        AppContext
    )
    const { formattedPopulation, formatPopulation } = useNumberFormat(
        country.population
    )
    const [listOfCurrencies, setListOfCurrencies] = useState([])
    const [listOfLanguages, setListOfLanguages] = useState([])
    const [borderCountries, setBorderCountries] = useState([])

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        currentCountry && setCountry(currentCountry)
    }, [currentCountry])

    useEffect(() => {
        population && formatPopulation()
    }, [population])

    useEffect(() => {
        if (languages.length === 0) return

        const languagesArray = []
        languages.forEach(({ name }) => {
            languagesArray.push(name)
        })
        setListOfLanguages(languagesArray.join())
    }, [languages])

    useEffect(() => {
        if (currencies.length === 0) return

        const currenciesArray = []
        currencies.forEach(({ name }) => {
            currenciesArray.push(name)
        })
        setListOfCurrencies(currenciesArray.join())
    }, [currencies])

    useEffect(() => {
        if (!borders) return

        const getBorderCountries = async () => {
            const response = await fetchBorderCountries(borders)
            if (response) {
                setBorderCountries(response)
            } else {
                console.log('Error')
            }
        }
        getBorderCountries()
    }, [borders])

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const handleClickBack = () => {
        setCurrentCountry('')
        history.push('/home')
    }

    if (name === '') return null

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <AppLayout>
            <section
                className={`detail ${
                    appMode === 'Light' ? 'detail-light' : 'detail-dark'
                }`}
                data-testid='detail'
            >
                <article data-testid='detail-header'>
                    <button onClick={handleClickBack}>
                        <i className='fas fa-arrow-left' type='button'></i> Back
                    </button>
                </article>
                <section>
                    <img className='flag' src={flag} alt={name} />
                    <article>
                        <h2 className='name'>{name}</h2>
                        <div
                            className={`country-info ${
                                appMode === 'Light'
                                    ? 'country-info-light'
                                    : 'country-info-dark'
                            }`}
                        >
                            <div>
                                <span>
                                    <strong>Native Name:</strong> {nativeName}
                                </span>
                                <span>
                                    <strong>Population:</strong>{' '}
                                    {formattedPopulation}
                                </span>
                                <span>
                                    <strong>Region:</strong> {region}
                                </span>
                                <span>
                                    <strong>Subregion:</strong> {subregion}
                                </span>
                                <span>
                                    <strong>Capital:</strong> {capital}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <strong>Top Level Domain:</strong>{' '}
                                    {topLevelDomain}
                                </span>
                                <span>
                                    <strong>Currencies:</strong>{' '}
                                    {listOfCurrencies}
                                </span>
                                <span>
                                    <strong>Languages:</strong>{' '}
                                    {listOfLanguages}
                                </span>
                            </div>
                        </div>
                        <footer>
                            <span>Border Countries:</span>
                            {borderCountries &&
                                borderCountries.map(country => (
                                    <CountryButton
                                        key={country.name}
                                        country={country}
                                    />
                                ))}
                        </footer>
                    </article>
                </section>
            </section>
        </AppLayout>
    )
}

export default Detail
