import "./ReusableComponents.css";
import React from "react";
const List=(props)=>{
  return<ol>
  {
    props.data.map((v,i)=>{
      return <li key={i}>{v}</li>
    })
  }
  </ol>
}
function template() {
  const players=['snehal','vishal','sonu','shruti']
  const students=['s1','s2','s3','s4']
  return (
    <div className="reusable-components">
      <h1>ReusableComponents</h1>
        <h3>players</h3>
        <list data={players}/>
         <h3>students</h3>
         <list data={students}/>
         
    </div>
  );
};

export default template;
