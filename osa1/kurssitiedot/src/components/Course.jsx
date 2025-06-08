const Header = (props) => {
  return (
    <>
      <h2>{props.course.name}</h2>
    </>
  )
}

const Content = (props) => props.course.parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises}/>)

const Part = (props) => {
  return (
    <>
    <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
    <p style={{fontWeight: 'bold'}}>total of {total} exercises</p>
    </>
  )
}

const Course = (props) => (
  props.courses.map((course) =>
      <div key={course.id}>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
)

export default Course