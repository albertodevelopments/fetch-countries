import React from 'react'

// Componentes
import Header from 'components/Header'

import './styles.scss'

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main data-testid='main'>{children}</main>
        </>
    )
}

export default AppLayout
