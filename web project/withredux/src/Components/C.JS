import React from 'react'
import { useSelector } from 'react-redux'

const C = () => {
    const state=useSelector((state)=>state)
  return (
    <div>
        <h1>Name:{state.nameLocReducer.name}</h1>
        <h1>Loc:</h1>
    </div>
  )
}

export default C;