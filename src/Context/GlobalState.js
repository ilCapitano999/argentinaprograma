import React,{useState} from "react";
import NetContext from "./NetContext"

function GlobalState(props){
    
    const [login,setLogin] = useState(localStorage.getItem("login"))
    const loginUser = () => {
        setLogin(true);
        localStorage.setItem("login",true)
    }
    const logoutUser = ()=>{
        setLogin(false);
        localStorage.removeItem("login")
    }
    
    return(
        <NetContext.Provider
            value={{
                login:login,
                loginUser:loginUser,
                logoutUser:logoutUser
            }}
        >
            {props.children}
        </NetContext.Provider>
    )
    
}
export default GlobalState;