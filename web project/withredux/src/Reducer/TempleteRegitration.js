import React from 'react'
import { useDispatch } from 'react-redux'
import { setEmail, setName, setPWD } from './Reduxtoolkit/RegitrationSlice'

export const TempleteRegitration = () => {
    const dispatch=useDispatch()
    const handleName=(eve)=>{
        dispatch(setName(eve.target.value));

    }
    const handlePwd=(eve)=>{
        dispatch(setPWD(eve.target.value));

    }
    const handleEmail=(eve)=>{
        dispatch(setEmail(eve.target.value));






















































































































































        
    }
  return (
    <div>
        <p>
            <b>Name:</b>
            <input id='Name' onChange={handleName}/>
        </p>
        <p>
            <b>Password</b>
            <input id='pwd' onChange={handlePwd}/>
        </p>
        <p>
            <b>Email</b>
            <input id='email' onChange={handleEmail}/>
        </p>
    </div>
  )
}
