import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from './Select';

const App = () => {
    const [countries,setCountries]=useState();
    const [data,setData]=useState();
    const [selectValue,setSelectValue]=useState('Pakistan');

    const handleSelect=(e)=>setSelectValue(e.target.value)

    useEffect(()=>{
        (async ()=>{
            const DATA=(await axios.get('https://api.covid19api.com/summary')).data.Countries;
            setCountries(DATA.map(c=>c.Country))
            setData(DATA)
        })()
 
    },[])

    if (data){
        const INDEX=data.findIndex(i=>i.Country===selectValue);
    var i=2;
        var {TotalConfirmed,TotalRecovered,TotalDeaths}=data[INDEX];
    }

    return (
        <>
            <h1>Confirmed: {TotalConfirmed} </h1>
            <h1>Recovered: {TotalRecovered} </h1>
            <h1>Deaths: {TotalDeaths} </h1>
            <Select countries={countries?countries:['Loading....']} handleSelect={handleSelect} 
            selectValue={selectValue}/>
        </>
    )
}

export default App;