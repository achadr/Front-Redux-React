
export const ADD_PROPERTY = "ADD_PROPERTY"
export const GET_PROPERTIES = "GET_PROPERTIES"
const INITIAL_STATE = []
 const propertiesReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
         case GET_PROPERTIES:
             return action.payload
         case ADD_PROPERTY: 
            return [...state, action.payload]
         default: 
            return [...state]
     }
} 

export default propertiesReducer