import React from 'react'
import Home from 'pages/home'
import { unmountComponentAtNode } from 'react-dom'
import { screen, render, act } from '@testing-library/react'
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
