import React,{useState} from 'react'

const Element = () => {

  const [num , setNum] = useState(5);

  const numClick = (e) => {
    e.preventDefault()
    setNum(num + 1)
  }


  return (
    <div>
      <button onClick={numClick}>Numbers {num} time Tap</button>
    </div>
  )
}
export default Element;