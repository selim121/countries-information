import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, population, name, region, flags} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;