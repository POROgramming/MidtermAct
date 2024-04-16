import React from "react";

function LoggedIn(props){
    
    return(props.isLoggedIn? loggedIn:logOut)
   
}
const loggedIn = <h1>LoggedIn</h1>
const logOut = <h1>Logged Out</h1>

export default LoggedIn;