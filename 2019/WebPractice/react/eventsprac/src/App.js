import React from 'react';
import './stylesheets/App.scss';
import sign from './images/plus-sign.svg';


export function App() {
  return (
    <div id="root">
      <AddItem/>

    </div>
  );
}

export function Item(props){
  return (
    <section className="container-item">
        <img src='' alt="image"/>
        <h2>{props.title}</h2>
        <div className="desc">Blah blah blah </div>
    </section>

  );
}

export class AddItem extends React.Component{
  state = {items : [{title:'1'}]};
  addItem = ()=>this.setState(prevState=>{
        return {items:prevState.items.concat([{title:'5'}])};
    }
  )
  render(){
    return(
      <div id="root">
        <Item title={this.state.items.map(x=>x.title)}/>
        <section className="container-addItem">
          <button onClick={this.addItem}>      
            <img src={sign} alt="add"/>
            <span>Add Item</span>
          </button>
        </section>
      </div>
    )
  }
}

