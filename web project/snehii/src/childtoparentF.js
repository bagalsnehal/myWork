import React from 'react'

export const Parent = () => {
    getData=(myData)=>{
     alert (myData)
    }
  return (
    <div><Child fn={getData}/></div>
  )
}
const Child=({fn})=>{
    const data='snehal'
    const handleClick=()=>{
      fn(data);
    }
    return <div>
        <button onClick={handleClick}>click</button>
    </div>
}