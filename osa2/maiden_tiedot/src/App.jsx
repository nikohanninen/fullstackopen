import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import coutriesService from './services/coutries'
import DisplayCountries from './components/DisplayCountries'

const App = () => {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
  coutriesService.getAll()
  .then(initialCountries => {
    setCountries(initialCountries)
    console.log(initialCountries)
  })},[])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    console.log(event.target.value)
  }

  return(
    <div>
      <Filter name={filter} handleFilterChange={handleFilterChange} />
      <DisplayCountries countries={countries} filter={filter}/>
    </div>
  )
}

export default App
