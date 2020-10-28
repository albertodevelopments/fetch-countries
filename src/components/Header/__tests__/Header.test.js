import React from 'react'
import Header from 'components/Header'
import { unmountComponentAtNode } from 'react-dom'
import { render, act } from '@testing-library/react'

test('should render without crashing', async () => {
    const element = document.createElement('div')
    await act(async () => render(<Header />, element))
    unmountComponentAtNode(element)
})
