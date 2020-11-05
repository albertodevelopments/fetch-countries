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

    /* SÓLO TESTING - Para hacer la prueba hay que comentar los estados country y borderCountries *
    const country = {
        name: 'Belgium',
        nativeName: 'België',
        flag: 'https://restcountries.eu/data/bel.svg',
        population: 11319511,
        region: 'Europe',
        subregion: 'Western Europe',
        capital: 'Brussels',
        topLevelDomain: ['.be'],
        currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
        languages: [
            {
                iso639_1: 'nl',
                iso639_2: 'nld',
                name: 'Dutch',
                nativeName: 'Nederlands',
            },
            {
                iso639_1: 'fr',
                iso639_2: 'fra',
                name: 'French',
                nativeName: 'français',
            },
            {
                iso639_1: 'de',
                iso639_2: 'deu',
                name: 'German',
                nativeName: 'Deutsch',
            },
        ],
        borders: ['FRA', 'DEU', 'LUX', 'NLD'],
    }
    const borderCountries = [
        {
            name: 'France',
            nativeName: 'France',
            flag: 'https://restcountries.eu/data/fin.svg',
            population: 66710000,
            region: 'Europe',
            subregion: 'Western Europe',
            capital: 'Paris',
            topLevelDomain: ['.fr'],
            currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
            languages: [
                {
                    iso639_1: 'fr',
                    iso639_2: 'fra',
                    name: 'French',
                    nativeName: 'français',
                },
            ],
            borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
        },
    ]
    * SÓLO TESTING - Para hacer la prueba hay que comentar los estados country y borderCountries */

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

    const appContext = useContext(AppContext)
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
        if (
            !appContext.currentCountry &&
            localStorage.getItem('fetch-country-current')
        ) {
            appContext.setCurrentCountry(
                JSON.parse(localStorage.getItem('fetch-country-current'))
            )
        }
    }, [appContext])

    useEffect(() => {
        appContext &&
            appContext.currentCountry &&
            setCountry(appContext.currentCountry)
    }, [appContext, appContext.currentCountry])

    useEffect(() => {
        population && formatPopulation()
    }, [population, formatPopulation])

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
        appContext && appContext.setCurrentCountry('')
        history && history.push('/home')
    }

    if (name === '') return null

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <AppLayout>
            <section
                className={`detail ${
                    appContext && appContext.appMode === 'Light'
                        ? 'detail-light'
                        : 'detail-dark'
                }`}
                data-testid='detail'
            >
                <article data-testid='detail-header'>
                    <button data-testid='back' onClick={handleClickBack}>
                        <i className='fas fa-arrow-left' type='button'></i> Back
                    </button>
                </article>
                <section>
                    <img className='flag' src={flag} alt={name} />
                    <article>
                        <h2 className='name' data-testid='detail-name'>
                            {name}
                        </h2>
                        <div
                            className={`country-info ${
                                appContext && appContext.appMode === 'Light'
                                    ? 'country-info-light'
                                    : 'country-info-dark'
                            }`}
                        >
                            <div>
                                <span>
                                    <strong>Native Name:</strong>{' '}
                                    <span data-testid='native-name'>
                                        {nativeName}
                                    </span>
                                </span>
                                <span>
                                    <strong>Population:</strong>{' '}
                                    {formattedPopulation}
                                </span>
                                <span>
                                    <strong>Region:</strong> {region}
                                </span>
                                <span>
                                    <strong>Subregion:</strong>{' '}
                                    <span data-testid='subregion'>
                                        {subregion}
                                    </span>
                                </span>
                                <span>
                                    <strong>Capital:</strong> {capital}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <strong>Top Level Domain:</strong>{' '}
                                    <span data-testid='toplevel-domain'>
                                        {topLevelDomain}
                                    </span>
                                </span>
                                <span>
                                    <strong>Currencies:</strong>{' '}
                                    <span data-testid='currencies'>
                                        {listOfCurrencies}
                                    </span>
                                </span>
                                <span>
                                    <strong>Languages:</strong>{' '}
                                    <span data-testid='languages'>
                                        {listOfLanguages}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <footer>
                            <span>Border Countries:</span>
                            <div data-testid='border-countries'>
                                {borderCountries &&
                                    borderCountries.map(country => (
                                        <CountryButton
                                            key={country.name}
                                            country={country}
                                        />
                                    ))}
                            </div>
                        </footer>
                    </article>
                </section>
            </section>
        </AppLayout>
    )
}

export default Detail
