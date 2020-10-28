import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from 'components/Header'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

// test('<Header /> - Header loads properly', () => {
//     // const wrapper = render(<Header />)
//     // wrapper.debug()

//     render(<Header />)

//     const title = screen.getByTestId('title')
//     expect(title).toBeInTheDocument()
//     expect(title.tagName).toBe('H1')
//     expect(title.tagName).not.toBe('H2')
//     expect(title.textContent).toBe('Where in the world?')

//     const lightModeIcon = screen.getByTestId('light-mode-icon')
//     expect(lightModeIcon).toBeInTheDocument()
//     expect(lightModeIcon.tagName).toBe('I')
//     expect(lightModeIcon.tagName).not.toBe('P')
//     expect(lightModeIcon.classList.contains('fa'))
//     expect(lightModeIcon.classList.contains('fa-moon'))

//     const lightModeText = screen.getByTestId('light-mode-text')
//     expect(lightModeText).toBeInTheDocument()
//     expect(lightModeText.tagName).toBe('SPAN')
//     expect(lightModeText.tagName).not.toBe('DIV')
//     expect(lightModeText.textContent).toBe(' Light Mode')
// })
