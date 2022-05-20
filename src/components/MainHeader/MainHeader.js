import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { Switch } from '../Switch/Switch';
import { useContext} from 'react';
import Authcontext from '../../store/Auth-context';

const MainHeader = () => {
  let color = useContext(Authcontext)
  return (
    <header className={classes[`main-header`]} style={{background: ((color.color && 'black')|| '#741188')}}>
      <h1>A Typical Page</h1>
      <Navigation/>
      <Switch/>
    </header>
  );
};

export default MainHeader;
