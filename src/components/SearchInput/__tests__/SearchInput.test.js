import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import SearchInput from 'components/SearchInput'
import { unmountComponentAtNode } from 'react-dom'

const getCountriesByName = jest.fn()

test('should render without crashing', () => {
    const element = document.createElement('div')
    render(<SearchInput getCountriesByName={getCountriesByName} />, element)
    unmountComponentAtNode(element)
})

test('should contain the proper elements', () => {
    const wrapper = render(
        <SearchInput getCountriesByName={getCountriesByName} />
    )
    //wrapper.debug()

    const searchField = screen.getByTestId('search-field')
    expect(searchField).toBeInTheDocument()
    expect(searchField.tagName).toBe('INPUT')
    expect(searchField.getAttribute('placeholder')).toBe(
        'Search for a country...'
    )
})
