import React from 'react'

const Analytics = () => {

  const hello = () => {
    alert(loding());

  }
  return (
    <div className='Analytics-dash'>
      <h1>Hello DashBoard</h1>
      <button onClick={hello} class="btn">Base class</button>
    </div>
  )
}

export default Analytics
