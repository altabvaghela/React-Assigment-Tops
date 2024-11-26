import React, { useState } from 'react'

const CounterComponent = () => {
    const [count,setCount]=useState(0)
  return (
    <>
    <h1>Counter App</h1>

    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>

    
    </>
  )
}

export default CounterComponent
