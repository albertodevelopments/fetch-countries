import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from 'components/Header'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

test('<Header /> - Header loads properly', () => {
    // const wrapper = render(<Header />)
    // wrapper.debug()

    render(<Header />)

    const title = screen.getByTestId('title')
    expect(title).toBeInTheDocument()
    expect(title.tagName).toBe('H1')
    expect(title.tagName).not.toBe('H2')
    expect(title.textContent).toBe('Where in the world?')

    const darkModeIcon = screen.getByTestId('dark-mode-icon')
    expect(darkModeIcon).toBeInTheDocument()
    expect(darkModeIcon.tagName).toBe('I')
    expect(darkModeIcon.tagName).not.toBe('P')
    expect(darkModeIcon.classList.contains('fa'))
    expect(darkModeIcon.classList.contains('fa-moon'))

    const darkModeText = screen.getByTestId('dark-mode-text')
    expect(darkModeText).toBeInTheDocument()
    expect(darkModeText.tagName).toBe('SPAN')
    expect(darkModeText.tagName).not.toBe('DIV')
    expect(darkModeText.textContent).toBe(' Dark Mode')
})
