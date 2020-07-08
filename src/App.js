import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import Select from './Select';
import CountUp from 'react-countup';

const App = () => {
    const [countries,setCountries]=useState();
    const [data,setData]=useState();
    const [global,setGlobal]=useState();
    const [date,setDate]=useState();
    const [selectValue,setSelectValue]=useState('Global');

    const handleSelect=(e)=>setSelectValue(e.target.value)

    useEffect(()=>{
        (async ()=>{
            const DATA=(await axios.get('https://api.covid19api.com/summary')).data;
            setCountries(DATA.Countries.map(c=>c.Country))
            setData(DATA.Countries)
            setGlobal(DATA.Global)
            setDate(DATA.Date)
        })()
 
    },[])

    if (data){
        const INDEX=data.findIndex(i=>i.Country===selectValue);
        if (selectValue!=='Global'){
            var {TotalConfirmed,TotalRecovered,TotalDeaths}=data[INDEX];
        }
        else if (selectValue==='Global' && global){
            var {TotalConfirmed,TotalRecovered,TotalDeaths}=global;
        }
    }

    return (
        <>
            <h1>Confirmed: {TotalConfirmed && <CountUp end={TotalConfirmed} separator=',' />} </h1>
            <h1>Recovered: {TotalRecovered && <CountUp end={TotalRecovered} separator=','/>} </h1>
            <h1>Deaths: {TotalDeaths && <CountUp end={TotalDeaths} separator=','/>} </h1>
            <h1>Last Updated: {date && new Date(date).toDateString()} </h1>
            <Select countries={countries?countries:['Loading....']} handleSelect={handleSelect} 
            selectValue={selectValue}/>
        </>
    )
}

export default App;