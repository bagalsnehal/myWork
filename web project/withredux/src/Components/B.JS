import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

const B = () => {
    const locRef=useRef(null)
    const dispatch=useDispatch();
    const handleLoc=()=>{
        dispatch({
            type:'LOC',
            payload:locRef.current.value
        })
    }
  return (
    <div>
        <input ref={locRef}></input>
        <button onClick={handleLoc}>Loc:</button>
    </div>
  )
}

export default B;
