import React from 'react'

export const Dropdowon2 = () => {
    const colourlist=['red','blue','pink']
  return (
    <div>
        <select>
    {colourlist.map((v,i)=>{
        return<option key={i}>{v}</option>

    })}
    </select>
    </div>
  )
}
