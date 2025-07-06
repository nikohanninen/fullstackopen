import Person from './Person'

const Persons = (props) => {
  return(
    <div>
        {props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase())).map(person => 
          <Person key={person.name} person={person} handleClick={props.handleClick}/> 
        )}
      </div>
  )
}

export default Persons