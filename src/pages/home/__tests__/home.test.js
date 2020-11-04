import React from 'react'
import Home from 'pages/home'
import ListOfCountries from 'components/ListOfCountries'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { unmountComponentAtNode } from 'react-dom'
import { screen, render, act, fireEvent } from '@testing-library/react'
import { countries, countriesEurope } from '__mock__/countries.js'
import axios from 'axios'

const mockAxios = axios

test('should render without crashing', async () => {
    const element = document.createElement('div')
    await act(async () => render(<Home />, element))
    unmountComponentAtNode(element)
})

test('should render all the countries', async () => {
    //Consumiremos los datos del fichero mock en lugar de la API
    mockAxios.get = jest.fn().mockResolvedValue({
        data: countries,
    })

    // const emptyCountries = []
    await act(async () => render(<Home countries={countries} />))

    const countryCards = screen.findAllByTestId('country-card')
    expect(await countryCards).toHaveLength(250)
    expect(mockAxios.get).toHaveBeenCalled()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
})

test('should render countries in Europe', async () => {
    //Consumiremos los datos del fichero mock en lugar de la API
    mockAxios.get = jest.fn().mockResolvedValue({
        data: countriesEurope,
    })

    // const emptyCountries = []
    await act(async () => render(<Home countries={countriesEurope} />))

    const countryCards = screen.findAllByTestId('country-card')
    expect(await countryCards).toHaveLength(53)
    expect(mockAxios.get).toHaveBeenCalled()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
})

test('should search for selected words', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({
        data: countries,
    })

    await act(async () => {
        render(<Home countries={countries} />)
        // render(<SearchInput getCountriesByName={getCountriesByName} />)

        const searchField = screen.getByTestId('search-field')
        fireEvent.change(searchField, {
            target: { value: 'Belgium' },
        })
        fireEvent.keyDown(searchField, {
            keyCode: 13,
        })
        const wrapper = render(<ListOfCountries countries={countries} />)
        //wrapper.debug()
    })
})

test('should render the selected country', async () => {
    const countries = [
        {
            name: 'Belgium',
            flag: 'https://restcountries.eu/data/blr.svg',
            population: 11319511,
            region: 'Europe',
            capital: 'Brussels',
        },
    ]
    await act(async () => {
        render(<Home countries={countries} />)
        const wrapper = render(<ListOfCountries countries={countries} />)
        //wrapper.debug()

        expect(screen.getAllByTestId('country-name').length).toBe(1)

        const country = screen.getByTestId('country-name')
        expect(country).toBeInTheDocument()
        expect(country.textContent).toBe('Belgium')
    })
})
