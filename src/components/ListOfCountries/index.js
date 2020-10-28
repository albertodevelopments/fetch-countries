import React from 'react'

import './styles.scss'

// Componentes
import Country from 'components/Country'

const ListOfCountries = ({ countries }) => {
    if (!countries) return null

    /* -------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO ---------------------------- */
    /* -------------------------------------------------------------------- */
    return (
        <>
            <section className='countries'>
                {countries &&
                    countries.map(country => (
                        <Country key={country.name} country={country} />
                    ))}
            </section>
        </>
    )
}

export default ListOfCountries
