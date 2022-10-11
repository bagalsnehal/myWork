import React from "react";


export const Input=(props)=>{
    const {lbl,type,tagName,value,name,errMsg,isShowError,fnChange}=props.data
    return <div className="row mb-3" >
        <div className="col-sm-5 text-end">
            <b>{lbl}:</b>

        </div>
        <div className="col-sm-3">
            <input onChange={fnChange} name={name} value={value} className='form-control'/>
        </div>
        <div className="col-sm-4 ">
            {isShowError &&<b className="text-danger">{errMsg}</b>}
        </div>
        

    </div>
}