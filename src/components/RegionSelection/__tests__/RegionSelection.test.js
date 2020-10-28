import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from 'pages/home'
import RegionSelection from 'components/RegionSelection'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { unmountComponentAtNode } from 'react-dom'
import userEvent from '@testing-library/user-event'

const regions = [
    { code: 'africa', name: 'Africa' },
    { code: 'america', name: 'America' },
    { code: 'asia', name: 'Asia' },
    { code: 'europe', name: 'Europe' },
    { code: 'oceania', name: 'Oceania' },
]

test('should render without crashing', () => {
    const element = document.createElement('div')
    render(<RegionSelection />, element)
    unmountComponentAtNode(element)
})

test('should contain the proper elements', () => {
    const wrapper = render(<RegionSelection />)
    //wrapper.debug()

    const areaSelect = screen.getByTestId('region-selection')
    expect(areaSelect).toBeInTheDocument()
    expect(areaSelect.tagName).toBe('SELECT')
    expect(areaSelect.children.length).toBe(regions.length + 1)

    // Revisamos las options
    expect(screen.getAllByTestId('region-option')).toHaveLength(5)
    expect(screen.getAllByTestId('region-option')[0].textContent).toBe('Africa')
    expect(screen.getAllByTestId('region-option')[1].textContent).toBe(
        'Americas'
    )
    expect(screen.getAllByTestId('region-option')[2].textContent).toBe('Asia')
    expect(screen.getAllByTestId('region-option')[3].textContent).toBe('Europe')
    expect(screen.getAllByTestId('region-option')[4].textContent).toBe(
        'Oceania'
    )
})

test('selection options should work', () => {
    const getCountriesByRegion = jest.fn()

    render(<Home getCountriesByRegion={getCountriesByRegion} />)

    //render(<RegionSelection getCountriesByRegion={getCountriesByRegion} />)
    userEvent.selectOptions(screen.getByTestId('region-selection'), [
        'americas',
    ])
    expect(screen.getByText('Americas').selected).toBe(true)
})
