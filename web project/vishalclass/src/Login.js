
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Input} from './inputControls/input'


const inputConstrols=[
    {
      lbl:'User Id',
      type: 'text',
      tagName:'input',
      value:'',
      errMsg:'please enter user id',
       isShowError: false,
       name:'uid'

    },
    {
        lbl:'Password',
        type: 'Password',
        tagName:'input',
        value:'',
        errMsg:'please enter password',
         isShowError: false,
         name:'pwd'
    
    }
]

export const Login =()=>{
    const[templete,setTemplete]=useState('')
    useEffect(()=>{
        prepareTemplete()
    },[])
    const fnChnage=(eve)=>{
         const {name,value}=eve.targt;
          const inputConstrolObj=inputConstrols.find((obj)=>{
            return obj.name==name
         })
         inputConstrolObj.value=value;
         
    }
    const prepareTemplete=()=>{
        let updateInputConstrols=inputConstrols.map((obj)=>{
            const data={...obj,fnChnage}
            return <Input data={data} />
    })
    setTemplete(updateInputConstrols)
    return(
        <div className='container-fluid'>
            <h2 className="text-center mt-3 mb-4">Login</h2>
            {
               templete
            }
            {
                inputConstrols.map((obj)=>{
                    const data={...obj,fnChnage}
                    return <Input data={data} />
                })
            }
            <div className="row">
                <div className="offset-sm-5 col-sm-7">
                    <button className="btn btn-primary">Login</button>
                </div>

            </div>
        </div>
    )
        
    
    }
}