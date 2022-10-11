import React from 'react';
import { useSelector} from 'react-redux';
import {TempleteRegitration} from "../TempleteRegitration";

export const Regitrartion = () => {
    const state=useSelector((state)=>state)
    const handleReg=()=>{
      const name=state.Regitrartion.name;
      const pwd=state.Regitrartion.pwd;
      const email=state.Regitrartion.email;
      console.log({
        name,
        pwd,
        email
      })
      
      

    }
  return (
    <div>
        <TempleteRegitration/>
        <button onClick={handleReg}>Regitration</button>
    </div>
  )
}
