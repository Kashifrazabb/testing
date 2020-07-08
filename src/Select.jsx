import React from 'react'

const Select = ({countries,global,selectValue,handleSelect}) => {
    return (
        <div>
            <select onChange={handleSelect} value={selectValue}>
                <option value="Global">Global</option>
                {countries.map(country=><option value={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default Select;
