import React from 'react'

export const Tablelist = () => {
    const myHeaderData=['name','loc','runs']
    const data=[
        {name:'sachin',loc:'mumbasi',runs:2000}
        {name:'dhoni',loc:'ranchi',runs:2000}
        {name:'kohali',loc:'mumbasi',runs:2000}
        
    ]
  return (
    <div>
        <table border='1px solid'>
            <thead>
                <tr>
                    {myHeaderData.map((headers,i)=>{
                        return <th>headers</th>
                    }
                    )}
                </tr>
            </thead>
            <tbody>
                
                    {data.map((obj)=>{
                        
                        return(
                            <tr>
                        <td>{obj.name}</td>
                        <td>{obj.loc}</td>
                        <td>{obj.runs}</td>
                
                </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}
