import { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const History = ({allClicks}) => {
  if(allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      <p>button press history: {allClicks.join(' ')}</p>
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(right + 1)
    setTotal(updatedRight + left)
  }

  return (
    <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks}/>
    </div>
  )
}

export default App
