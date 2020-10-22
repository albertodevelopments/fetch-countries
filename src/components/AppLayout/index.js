import React from 'react'

// Componentes
import Header from 'components/Header'

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default AppLayout
