import React from 'react'
import { render, screen } from '@testing-library/react'
import AreaSelection from 'components/RegionSelection'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import SearchInput from 'components/SearchInput'

// test('<SearchInput /> - Loading SearchInput', () => {
//     const wrapper = render(<SearchInput />)
//     //wrapper.debug()

//     const searchField = screen.getByTestId('search-field')
//     expect(searchField).toBeInTheDocument()
//     expect(searchField.tagName).toBe('INPUT')
//     expect(searchField.tagName).not.toBe('BUTTON')
// })
