import React from 'react'

import { unmountComponentAtNode } from 'react-dom'
import { render, act } from '@testing-library/react'
import ListOfCountries from 'components/ListOfCountries'

test('should render without crashing', async () => {
    const element = document.createElement('div')
    await act(async () => render(<ListOfCountries />, element))
    unmountComponentAtNode(element)
})
