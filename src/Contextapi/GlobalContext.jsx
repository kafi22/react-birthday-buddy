import { useReducer } from "react";
import Context from "./Context"
import reducer, { initialState } from "../Component/useCustomreducer";
import { data } from "../Db/Data";


const GlobalContext = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const clearBtn = () => {

        dispatch({type : 'CLEAR_BTN'});
    }

    const resetAll = () => {
        dispatch({type : 'RESET_ALL', payload : {data}});
    }

    return (
        <Context.Provider value={{state, clearBtn, resetAll}}>
            {props.children}
        </Context.Provider>
    )
}

export default GlobalContext;