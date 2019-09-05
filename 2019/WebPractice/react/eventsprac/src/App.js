import React from 'react';
import './stylesheets/App.scss';
import sign from './images/plus-sign.svg';


export function App() {
  return (
    <div className="container-item">
        <img src={sign} alt="image"/>
        <h2>Seeds</h2>
        <div className="desc">Blah blah blah </div>
    </div>
  );
}

export function AddItem(){
  return(
    <div className="container-addItem">
      <img src={sign} alt="add"/>
    </div>
  )
}

