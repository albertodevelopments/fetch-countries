// Dependencias
import axios from 'axios'

const API_URL = 'https://restcountries.eu/rest/v2'

export const regions = [
    { code: 'africa', name: 'Africa' },
    { code: 'america', name: 'America' },
    { code: 'asia', name: 'Asia' },
    { code: 'europe', name: 'Europe' },
    { code: 'oceania', name: 'Oceania' },
]

export const fetchCountries = async () => {
    const url = API_URL + '/all'
    return await fetchAPI(url)
}

export const fetchCountriesByRegion = async region => {
    const url = `${API_URL}/region/${region}`
    return await fetchAPI(url)
}

export const fetchCountriesByName = async name => {
    const url = `${API_URL}/name/${name}`
    return await fetchAPI(url)
}

export const fetchBorderCountries = async borders => {
    let borderCountries = []

    for (const code of borders) {
        const url = `${API_URL}/alpha/${code}`
        const response = await axios.get(url)
        if (response) {
            const country = response.data
            const {
                name,
                flag,
                nativeName,
                population,
                region,
                capital,
                subregion,
                topLevelDomain,
                currencies,
                languages,
                borders,
            } = country
            borderCountries.push({
                name,
                nativeName,
                flag,
                population,
                region,
                capital,
                subregion,
                topLevelDomain,
                currencies,
                languages,
                borders,
            })
        }
    }
    return borderCountries
}

const fetchAPI = async url => {
    const countries = []
    try {
        const response = await axios.get(url)
        response.data &&
            response.data.forEach(country => {
                const {
                    name,
                    flag,
                    nativeName,
                    population,
                    region,
                    capital,
                    subregion,
                    topLevelDomain,
                    currencies,
                    languages,
                    borders,
                } = country
                countries.push({
                    name,
                    nativeName,
                    flag,
                    population,
                    region,
                    capital,
                    subregion,
                    topLevelDomain,
                    currencies,
                    languages,
                    borders,
                })
            })
        return countries
    } catch (error) {
        console.log(error)
        return null
    }
}
