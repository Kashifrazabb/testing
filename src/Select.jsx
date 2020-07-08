import React from 'react'

const Select = ({countries,selectValue,handleSelect}) => {
    return (
        <div>
            <select onChange={handleSelect} value={selectValue}>
                {countries.map(country=><option value={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default Select;
