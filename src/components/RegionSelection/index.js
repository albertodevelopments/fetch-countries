import React, { useContext } from 'react'

// Context
import { AppContext } from 'context/AppContext'

import './styles.scss'

const regions = [
    { value: 'africa', name: 'Africa' },
    { value: 'americas', name: 'Americas' },
    { value: 'asia', name: 'Asia' },
    { value: 'europe', name: 'Europe' },
    { value: 'oceania', name: 'Oceania' },
]

const RegionSelection = ({ getCountriesByRegion }) => {
    /* -------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES ---------------------------- */
    /* -------------------------------------------------------------------- */
    const appContext = useContext(AppContext)
    const handleChangeRegion = e => {
        getCountriesByRegion(e.target.value)
    }

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <span
            className={`region-selection ${
                appContext && appContext.appMode === 'Light'
                    ? 'region-selection-light'
                    : 'region-selection-dark'
            }`}
        >
            <select
                data-testid='region-selection'
                placeholder='Filter By Region'
                onChange={handleChangeRegion}
            >
                <option>Filter by Region</option>
                {regions &&
                    regions.map(({ value, name }) => (
                        <option
                            data-testid='region-option'
                            key={value}
                            value={value}
                        >
                            {name}
                        </option>
                    ))}
            </select>
            <i className='fas fa-angle-down'></i>
        </span>
    )
}

export default RegionSelection
