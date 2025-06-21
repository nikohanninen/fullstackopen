const DisplayInformation = ({countries}) => {
    return(
        <div>
        {countries.map(country =>
            <div>
              <h1>{country.name.common}</h1>
              <p>Capital {country.capital}</p>
              <p>Area {country.area}</p>
              <h2>Languages</h2>
              <ul>
                {Object.values(country.languages).map(language => <li>{language}</li>)}
              </ul>
              <img src={country.flags.png} alt='flag of country'/>
            </div>
            )} 
        </div>
    )
}

export default DisplayInformation