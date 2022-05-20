import React from 'react';
import { useContext } from 'react';
import Authcontext from '../../../store/Auth-context';

import classes from './Card.module.css';

const Card = (props) => {
  let color = useContext(Authcontext)
  return (
    <div className={`${classes.card} ${props.className}`} style={{background:((color.color &&  'rgb(104, 70, 154)') ||'white')}}>{props.children}</div>
  );
};

export default Card;
