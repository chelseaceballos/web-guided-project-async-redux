import { combineReducers } from "redux"
import { quoteReducer } from "./quoteReducer"
import { titleReducer } from "./titleReducer"

const rootReducer = combineReducers(titleReducer, quoteReducer);

export default rootReducer;