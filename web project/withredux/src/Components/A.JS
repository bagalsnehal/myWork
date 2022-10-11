import React from 'react'
import { useRef } from 'react'
import {useDispatch} from 'react-redux'

const A = () => {
    const nameRef=useRef();
    const dispatch=useDispatch();
    const handleName=()=>{
        dispatch({
            type:'NAME',
            payload:nameRef.current.value
        })
    }
  return (
    <div>
        <Input ref={nameRef}></Input>
        <button onClick={handleName}>Name:</button>
    </div>
  )
}

export default A;