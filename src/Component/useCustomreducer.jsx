import { data } from "../Db/Data"

export const initialState = {
    people : data
}

const reducer = (state,action) => {

    if(action.type === 'CLEAR_BTN') {
        return {
            ...state,
            people : []

        }   
    }

    if (action.type === 'RESET_ALL') {

        return {
            ...state,
            people : action.payload.data
        }
    }

    return state;

   
}

export default reducer