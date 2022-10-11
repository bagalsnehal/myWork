import React, { useState } from 'react'
import React ,{useState} from 'react'

export const intdectcount = () => {
    const [cnt,setcnt]=useState(0);
    const decCnt=()=>{
        setcnt(cnt-1)
    }
    const  IntCnt=()=>{
        setcnt(cnt+1)
    }
  return (
    <div>
        <button onClick='{decCnt}'>-</button>
        <b>cnt</b>
        <button onClick='{IntCnt}'>+</button>
    </div>
  )
}
