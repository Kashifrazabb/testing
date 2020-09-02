import React, { createContext, useReducer } from 'react';
import Child from './Child';
import {reducer} from './reducers/reducer'

export const stateContext = createContext()

const App = () => {
    const [stateCounter,dispatchCounter]=useReducer(reducer,0)
    return (
        <stateContext.Provider value={{stateCounter,dispatchCounter}}>
            <Child />
        </stateContext.Provider>
    )
}

export default App;
