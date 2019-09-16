import React from 'react';
export class AddItemInput extends React.Component{
  
    handleSubmit =(e)=>{
      e.preventDefault();
    }
    handleChange=(e)=>{
  
    }
    render(){
      let display = this.props.displayOn ? {display:'flex'} : {display:'none'};
      return(
        <section id="handleSubmit" style={display}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" onChange={this.handleChange} id="title" />
  
            <label htmlFor="desc">Description:</label>
            <input type="text" onChange={this.handleChange} id="desc" />
          </form>
          <span>{ console.log(display,this.props.displayOn)}</span>
        </section>
      )
    }
  }