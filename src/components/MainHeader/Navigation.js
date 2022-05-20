import React from 'react';
import { useContext } from 'react';
import Authcontext from '../../store/Auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const contextData = useContext(Authcontext)
  // return(
  // <Authcontext.Consumer>
  //   {(contextData)=>{
        return (
          <nav className={classes.nav}>
            <ul>
              {contextData.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {contextData.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {contextData.isLoggedIn && (
                <li>
                  <button onClick={contextData.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
  //   }}
  // </Authcontext.Consumer>
  // )
};

export default Navigation;
