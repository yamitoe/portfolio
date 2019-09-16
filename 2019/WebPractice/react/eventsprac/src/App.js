import React from 'react';
import './stylesheets/App.scss';
import sign from './images/plus-sign.svg';
import seed1 from './images/fioretto.png'
import shortid from 'shortid';

export function App() {
  return (
    <AddItem/>
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
  state = {items : [{title:'Fioretto',img:seed1,desc:"Sweet and great"}]
    ,displayOn:false};

  addItem = ()=>{
    this.setState(prevState=>{
        return {items:prevState.items.concat([{title:'5'}])
      ,displayOn:true};
    }
  )}

  changeDisplayOff = ()=>this.setState({displayOn:false});

  render(){
    let display = this.state.displayOn ? {display:'flex'} : {display:'none'};
    return(
      <div id="addItem">
        {this.state.items.map(x=>{
          return <Item {...x} key={shortid.generate()} />
        })}
        <section className="container-addItem">
          <button onClick={this.addItem}>      
            <img src={sign} alt="add"/>
            <span>Add Item</span>
          </button>
        </section>
        <AddItemInput showDisplay={display}/>
      </div>
    )
  }
}

export class AddItemInput extends React.Component{
  
  handleSubmit =(e)=>{
    e.preventDefault();
  }
  handleChange=(e)=>{

  }
  render(){
    return(
      <section id="handleSubmit" style={this.props.showDisplay}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" onChange={this.handleChange} id="title" />

          <label htmlFor="desc">Description:</label>
          <input type="text" onChange={this.handleChange} id="desc" />
        </form>
        <span>{ console.log(this.display,this.props.showDisplay)}</span>
      </section>
    )
  }
}

