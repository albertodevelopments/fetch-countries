import React, { useState, useEffect, useContext } from 'react'

// Servicios
import {
    fetchCountries,
    fetchCountriesByRegion,
    fetchCountriesByName,
} from 'services/RESTClient'

// Context
import { AppContext } from 'context/AppContext'

// Componentes
import AppLayout from 'components/AppLayout'
import SearchInput from 'components/SearchInput'
import RegionSelection from 'components/RegionSelection'
import ListOfCountries from 'components/ListOfCountries'

import './styless.scss'

const Home = () => {
    /* -------------------------------------------------------------------- */
    /* --------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* -------------------------------------------------------------------- */
    const [countries, setCountries] = useState(null)
    const { appMode } = useContext(AppContext)

    /* -------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS --------------------------- */
    /* -------------------------------------------------------------------- */
    useEffect(() => {
        const getAllCountries = async () => {
            const response = await fetchCountries()
            if (response) {
                setCountries(response)
            } else {
                console.log('Error')
            }
        }
        getAllCountries()
    }, [])

    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const getCountriesByRegion = async region => {
        let response
        if (region === 'Filter by Region') {
            response = await fetchCountries()
        } else {
            response = await fetchCountriesByRegion(region)
        }
        if (response) {
            setCountries(response)
        } else {
            console.log('Error')
        }
    }

    const getCountriesByName = async name => {
        let response
        if (name === '') {
            response = await fetchCountries()
        } else {
            response = await fetchCountriesByName(name)
        }
        if (response) {
            setCountries(response)
        } else {
            console.log('Error')
        }
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <AppLayout>
            <section
                className={`home ${
                    appMode === 'Light' ? 'home-light' : 'home-dark'
                }`}
                data-testid='home'
            >
                {/* Cabecera */}
                <article data-testid='home-header'>
                    <SearchInput getCountriesByName={getCountriesByName} />
                    <RegionSelection
                        getCountriesByRegion={getCountriesByRegion}
                    />
                </article>
                {/* Cuerpo */}
                <ListOfCountries countries={countries} />
            </section>
        </AppLayout>
    )
}

export default Home
