
import { ADD_PROPERTY, GET_PROPERTIES } from "../reducers/propertiesReducer"
import axios from "axios"
import { GET_SIMULATIONS } from "../reducers/simulationsReducer"

export const addProperty = (property) => {
    return (dispatch)=> {
        dispatch({type : ADD_PROPERTY, payload : property})
    }
}

export const getProperties =  () => {
    return async (dispatch) => {
        const {data} = await axios.get("http://localhost:3004/properties")
        dispatch ({type : GET_PROPERTIES, payload : data})
    }
}

export const getSimulations = () => {
    return async (dispatch) => {
        const {data} = await axios.get("http://localhost:3004/simulations")
        dispatch ({type: GET_SIMULATIONS, payload: data})
    }
}