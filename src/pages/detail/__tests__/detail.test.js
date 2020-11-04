import React from 'react'
import Detail from 'pages/detail'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { unmountComponentAtNode } from 'react-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const handleClickBack = jest.fn()

test('should render without crashing', () => {
    const element = document.createElement('div')
    render(<Detail />, element)
    unmountComponentAtNode(element)
})

test('should render country detail', () => {
    const wrapper = render(<Detail />)
    //wrapper.debug()
    expect(screen.getByTestId('detail-name')).toBeInTheDocument()
    expect(screen.getByTestId('detail-name').textContent).toBe('Belgium')
    expect(screen.getAllByTestId('detail-name').length).toBe(1)

    expect(screen.getByTestId('native-name')).toBeInTheDocument()
    expect(screen.getByTestId('native-name').textContent).toBe('België')
    expect(screen.getAllByTestId('native-name').length).toBe(1)

    expect(screen.getByTestId('subregion')).toBeInTheDocument()
    expect(screen.getByTestId('subregion').textContent).toBe('Western Europe')
    expect(screen.getAllByTestId('subregion').length).toBe(1)

    expect(screen.getByTestId('toplevel-domain')).toBeInTheDocument()
    expect(screen.getByTestId('toplevel-domain').textContent).toBe('.be')
    expect(screen.getAllByTestId('toplevel-domain').length).toBe(1)

    expect(screen.getByTestId('currencies')).toBeInTheDocument()
    expect(screen.getByTestId('currencies').textContent).toBe('Euro')
    expect(screen.getAllByTestId('currencies').length).toBe(1)

    expect(screen.getByTestId('languages')).toBeInTheDocument()
    expect(screen.getByTestId('languages').textContent).toBe(
        'Dutch,French,German'
    )
    expect(screen.getAllByTestId('languages').length).toBe(1)

    const borderCountries = screen.getByTestId('border-countries')
    expect(borderCountries).toBeInTheDocument()
    expect(borderCountries.textContent).toBe('France')

    // Hacemos click en el botón volver
    const back = screen.getByTestId('back')
    expect(back).toBeInTheDocument()
    expect(back.textContent).toBe(' Back')
})
