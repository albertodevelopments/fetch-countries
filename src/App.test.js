import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import { unmountComponentAtNode } from 'react-dom'

test('should render without crashing', () => {
    const element = document.createElement('div')
    render(<App />, element)
    unmountComponentAtNode(element)
})
