import "./ListsAndKeys.css";
import React from "react";

function template() {
  const players=['sachin','dhoni','kholi','uv','snehal']
  return (
    <div className="lists-and-keys">
      <h1>ListsAndKeys</h1>
      <ul> 
        {
          players.map((v,i)=>{
            return <li key={i}>{v}</li>
          })
        }
        
      </ul>

       <ol>
        {
          players.map((v,i)=>{
            return <li keys={i}>{v}</li>
          })
        }
       </ol>
       <select>
        {
          players.map((v,i)=>{
            return <option keys={i}>{v}</option>
          })
        }
       </select>

      <table border='2px'>
        <thead>
           <tr>
            <th>sr.no</th>
            <th>name</th>
           </tr>
        </thead>
        <tbody>
          {
            players.map((v,i)=>{
                return <tr key={i}>
                  <td>{i+1}</td>
                  <td>{v}</td>

                </tr>
              
            })
          }
        </tbody>
      </table>



      
    </div>
  );
};

export default template;
