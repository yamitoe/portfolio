import React from 'react';
import './stylesheets/App.scss';
import sign from './images/plus-sign.svg';
import seed1 from './images/fioretto.png'
import shortid from 'shortid';


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
        <img src={props.img} alt={props.title}/>
        <h2>{props.title}</h2>
        <div className="desc">{props.desc}</div>
    </section>

  );
}

export class AddItem extends React.Component{
  state = {items : [{title:'Fioretto',img:seed1,desc:"Sweet and great"}]};
  addItem = ()=>this.setState(prevState=>{
        return {items:prevState.items.concat([{title:'5'}])};
    }
  )
  render(){
    return(
      <div id="root">
        {this.state.items.map(x=>{
          return <Item {...x} img={x.img} key={shortid.generate()} />
        })}
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

