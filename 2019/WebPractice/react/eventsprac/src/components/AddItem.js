import React from 'react';
import {AddItemInput} from './AddItemInput.js'
import {Item} from './Item.js'
import sign from '../images/plus-sign.svg';
import seed1 from '../images/fioretto.png'
import shortid from 'shortid';

export class AddItem extends React.Component{
    state = {items : [{title:'Fioretto',img:seed1,desc:"Sweet and great"}]
      ,displayOn:false};
  
    addItem = (itemObj)=>{
      this.setState(prevState=>{
          return {items:prevState.items.concat([itemObj])};
      })
      this.changeDisplay();
    }
  
    changeDisplay = ()=>this.setState(prev=>({displayOn:!prev.displayOn}));
  
    render(){
      return(
        <div id="addItem">
          {this.state.items.map(x=>{
            return <Item {...x} key={shortid.generate()} />
          })}
          <section className="container-addItem">
            <button onClick={this.changeDisplay}>      
              <img src={sign} alt="add"/>
              <span>Add Item</span>
            </button>
          </section>
          <AddItemInput displayOn={this.state.displayOn} 
          changeDisplay={this.changeDisplay} addItem={this.addItem}/>
        </div>
      )
    }
}