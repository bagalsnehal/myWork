
import { initialData } from '../Uitils/inits'

 const nameLocReducer = (state=initialData,action={type:'NAME',
 payload:nameRef.current.value}) => {
  if (action.type==='NAME'){
    state={
    ...state,name:action.payload
    }
  }
  return state
}
export {nameLocReducer}
