import React from "react";
const Authcontext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{}, 
    click: ()=>{},
    color: true,
});

export default Authcontext;