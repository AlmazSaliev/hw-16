import React from 'react';
import { useContext } from 'react';
import Authcontext from '../../store/Auth-context';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  let color = useContext(Authcontext)
  return (
    <Card className={classes.home}>
      <h1 style={{color: ((color.color && 'white') || 'black')}}>Welcome back!</h1>
    </Card>
  );
};

export default Home;
