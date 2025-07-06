import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('normal')

  useEffect(() => {
    console.log('effect')
    personService.getAll()
    .then((initialPersons) => {
      console.log('promise fulfilled')
      setPersons(initialPersons)
    })
  },[])
  console.log('render', persons.length, 'names')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: String(newName),
      number:String(newNumber)
    }
    
    if(persons.findIndex((element) => element.name === newName) === -1){
      personService.create(nameObject).then(returnedObject => {
        setPersons(persons.concat(returnedObject))
        setNewName('')
        setNewNumber('')
        setNotification(`Added ${newName}`)
        setTimeout(() => {
          setNotification(null)
        }, 2000)
          })
    }
    else{
      const person = persons.find((person) => person.name === newName)
      const personId = person.id
      const changedPerson = {... person, number: newNumber}
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
       personService.update(personId, changedPerson)
       .then(returnedObject => {
        setPersons(persons.map(person => person.id !== personId ? person :
          changedPerson))
          setNotification(`The number of ${newName} was changed`)
          setTimeout(() => {
          setNotification(null)
        }, 2000)
          setNewName('')
          setNewNumber('')
       }).catch(error => {
        setNotificationType('error')
        setNotification(`Information of ${newName} has already been removed from server`)
        setTimeout(() => {
          setNotification(null)
        }, 3000)
        setTimeout(() => {
          setNotificationType('normal')
        }, 3000)
       })
      }
    }
  }

  const deletePerson = (id) => {
    const personName = persons.find((person) => person.id === id).name

    if (window.confirm(`Delete ${personName} ?`)){
    personService.deletePerson(id).then(returnedObject => {
      setPersons(persons.filter(p => p.id !== id))
      setNotification(`Deleted ${personName}`)
        setTimeout(() => {
          setNotification(null)
        }, 2000)
   })
  }else{
    setNotification(`${personName} was not deleted`)
        setTimeout(() => {
          setNotification(null)
        }, 2000)
  }
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} notificationType={notificationType} />
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} handleClick={deletePerson}/>
    </div>
  )

}

export default App