import React, { useContext } from 'react'

// Context
import { AppContext } from 'context/AppContext'

import './styles.scss'

const SearchInput = ({ getCountriesByName }) => {
    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const { appMode } = useContext(AppContext)
    const handleSearch = e => {
        if (e.keyCode === 13) {
            getCountriesByName(e.target.value)
        }
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <div
            className={`search-input ${
                appMode === 'Light' ? 'search-input-light' : 'search-input-dark'
            }`}
        >
            <i className='fas fa-search'></i>
            <input
                data-testid='search-field'
                type='text'
                placeholder='Search for a country...'
                onKeyDown={handleSearch}
            />
        </div>
    )
}

export default SearchInput
