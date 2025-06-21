const Filter = (props) => {
  return(
    <div>
      <form>
        <label>find countries </label>
        <input type="text" value={props.filter} onChange={props.handleFilterChange}></input>
      </form>
    </div>
  )
}

export default Filter