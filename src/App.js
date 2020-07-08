import React, { useEffect, useState } from 'react';

const App = () => {
    const [v,setV]=useState();
    useEffect(()=>{
        (()=>{
            const A=[{A:1,B:2,C:3},{A:'a',B:'b',C:'c'}]
            setV(A)
        })()
    },[])
    console.log(v)
    return (
        <>
            
        </>
    )
}

export default App;
