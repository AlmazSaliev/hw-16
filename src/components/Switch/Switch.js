import React from "react";
import { useContext } from "react";
import Authcontext from "../../store/Auth-context";
import './Switch.css'

export const Switch = () =>{
const btn = useContext(Authcontext)
    
    return(
        <div className="container">
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" 
                 name='label' id="label" onClick={btn.click}/>
          <label className="label" htmlFor='label'>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    )
}