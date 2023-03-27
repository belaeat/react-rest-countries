import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    // Step-1: declare state
    const [countries, setCountries] = useState([]);

    // step-2: useEffect
    useEffect(() =>{

        // step-3: fetch the data
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // step-4: data set kora
        .then(data => setCountries(data));

    }, [])

    return (
        <div>
            <h1>Hello from Countries!</h1>
            {/* step-5: show data */}
            <div className='countries-container'>
            {
                countries.map(country => <Country country = {country}
                    key ={country.cca3}
                ></Country>)
            }
            </div>

        </div>
    );
};



export default Countries;<h1>Hello from Countries!</h1>