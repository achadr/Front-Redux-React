
const INITIAL_STATE = []
export const GET_SIMULATIONS = "GET_SIMULATIONS"
 const simulationsReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
        case GET_SIMULATIONS: {
            return action.payload
        } 
        default: 
            return state
     }
} 

export default simulationsReducer