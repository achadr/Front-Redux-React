import { combineReducers } from "redux";
import  propertiesReducer  from "./propertiesReducer";
import simulationsReducer from "./simulationsReducer";

const reducers = combineReducers({
    properties : propertiesReducer,
    simulations : simulationsReducer
})

export default reducers