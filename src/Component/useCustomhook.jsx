import { useContext } from "react"
import Context from "../Contextapi/Context"

const useCustomhook = () => {
 
    return useContext(Context)
}

export default useCustomhook;