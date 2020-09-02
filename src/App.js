import React from 'react'
import { Navbar } from './components/navbar'
import { Headline } from './components/headline'

import './App.scss'

const App = () => {
    return (
        <>
            <Navbar />
            <Headline title='Alright' desc='lorem ipsum lorem ipsum lorem ipsum' />
        </>
    )
}

export default App;
