import React from 'react';
import './stylesheets/App.scss';
import sign from './images/plus-sign.svg';


export function App() {
  return (
    <div id="root">
      <section className="container-item">
          <img src='' alt="image"/>
          <h2>Seeds</h2>
          <div className="desc">Blah blah blah </div>
      </section>
      <AddItem/>

    </div>
  );
}

export class AddItem extends React.Component{
  state = {myState : [{title:'1'}]};
  addItem = ()=>this.setState(this.state.concat([{title:'2'}]))
  render(){
    return(
      <section className="container-addItem">
        <button onClick={this.addItem}>      
          <img src={sign} alt="add"/>
          <span>Add Item</span>
        </button>
      </section>
    )
  }
}

