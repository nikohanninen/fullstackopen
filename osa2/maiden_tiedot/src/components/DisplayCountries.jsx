import DisplayInformation from "./DisplayInformation"

const DisplayCountries = ({countries, filter, setFilter}) => {

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    console.log(filteredCountries.length)

    const showButton = (countryName) => {
        const selectedCountry = filteredCountries.filter(country => country.name.common === countryName)
        
    }

    if(filteredCountries.length > 10){
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    else if(filteredCountries.length <= 10 && filteredCountries.length > 1){
        return(
        <div>
            {filteredCountries.map(country =>
            <div>
              {`${country.name.common} `}<button onClick={showButton}>Show</button>
            </div>
            )}
        </div>
    )
    }

    return(
        <div>
            <DisplayInformation countries={filteredCountries}/>
        </div>
    )
    
}
export default DisplayCountries