import {configureStore} from "@reduxjs/toolkit"
import { nameLocReducer } from "../Reducer/nameLocReducer";
import regitrartionSlice from "../Reducer/Reduxtoolkit/RegitrationSlice";




const rootReducer={
    nl:nameLocReducer,
    registration:regitrartionSlice
}
const store=configureStore({
    reducer:rootReducer
});
export default store;