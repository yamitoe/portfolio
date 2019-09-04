import React from 'react';
import './stylesheets/App.scss';


export function App() {
  return (
    <div className="container-item">
        <img src="./images/test.png" alt="image"/>
        <h2>Seeds</h2>
        <div className="desc">Blah blah blah </div>
    </div>
  );
}

export function AddItem(){
  return(
    <div className="container-addItem">
      <img src="./images/test.png" alt="add"/>
    </div>
  )
}

