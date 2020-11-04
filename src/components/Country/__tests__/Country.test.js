import React from 'react'

import { unmountComponentAtNode } from 'react-dom'
import { render, screen, act } from '@testing-library/react'
import Country from 'components/Country'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

test('should render without crashing', async () => {
    const country = {}
    const element = document.createElement('div')
    await act(async () => render(<Country country={country} />, element))
    unmountComponentAtNode(element)
})
