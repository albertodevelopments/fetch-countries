import React from 'react'
import { render, screen } from '@testing-library/react'
import AreaSelection from 'components/RegionSelection'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

const regions = [
    { code: 'africa', name: 'Africa' },
    { code: 'america', name: 'America' },
    { code: 'asia', name: 'Asia' },
    { code: 'europe', name: 'Europe' },
    { code: 'oceania', name: 'Oceania' },
]

test('<AreaSelection /> - Loading AreaSelection', () => {
    const wrapper = render(<AreaSelection />)
    //wrapper.debug()

    // Revisamos el select
    const areaSelect = screen.getByTestId('area-selection')
    expect(areaSelect).toBeInTheDocument()
    expect(areaSelect.tagName).toBe('SELECT')
    expect(areaSelect.tagName).not.toBe('DIV')
    expect(areaSelect.children.length).toBe(regions.length + 1)
    expect(areaSelect.children.length).not.toBe(regions.length)

    // Revisamos las options
    expect(screen.getAllByTestId('area-option')).toHaveLength(5)
})
