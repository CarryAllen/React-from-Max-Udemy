import React from 'react'
import './Card.css';

const Card = (props) => {

  const classes = 'card ' + props.className;

  return (
    <div className={classes}>
       {props.children}  {/*'children' are the reserve name in react */}
    </div>
  );
}

export default Card