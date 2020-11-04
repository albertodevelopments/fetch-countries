import React from 'react'

// Dependencias
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Componentes
import Home from 'pages/home'
import Detail from 'pages/detail'

// Context
import { AppProvider } from 'context/AppContext'

function App() {
    return (
        <AppProvider>
            <Router>
                <Switch>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/detail/:country'>
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </AppProvider>
    )
}

export default App
