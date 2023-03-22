import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const { capital, name, area, population, region, status, flags, languages } = props.country;
    return (
        <div className='singleCountry'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <div className='cardContent'>
                <p><span>City--</span>{capital}</p>
                <h5><span>Area--</span>{area}</h5>
                <h5><span>Population--</span>{population}</h5>
                <p><span>Region--</span> {region}</p>
                <p>{status}</p>

            </div>
        </div>
    );
};

export default Country;