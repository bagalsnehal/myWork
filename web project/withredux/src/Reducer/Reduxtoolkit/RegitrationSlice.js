import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    pwd:"",
    email:""
}
const regitrartionSlice=createSlice({
    name:'REG',
    initialState,
        reducers:{
        setName:(state,action)=>{
             state.name=action.payload
        },
        setPWD:(state,action)=>{
             state.pwd=action.payload
        },
        setEmail:(state,action)=>{
              state.email=action.payload
        }
    }
});
export const{setName,setPWD,setEmail}=regitrartionSlice.action;
export default regitrartionSlice.reducer;