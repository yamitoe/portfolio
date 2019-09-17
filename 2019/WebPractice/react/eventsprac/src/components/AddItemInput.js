import React from 'react';
export class AddItemInput extends React.Component{

  componentDidMount(){
    document.addEventListener('mousedown',this.handleClick);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown',this.handleClick);
  }

  handleSubmit =(e)=>{
    e.preventDefault();
  }
  handleClick=(e)=>{
    let x = document.getElementById('submitForm');
    if(!x.contains(e.target)){
      this.props.changeDisplayOff();
    }

  }
  render(){
    let display = this.props.displayOn ? {display:'flex'} : {display:'none'};
    return(
      <section id="handleSubmit" style={display}>
        <form onSubmit={this.handleSubmit} id="submitForm">
          <label htmlFor="title">Title:</label>
          <input type="text" onChange={this.handleChange} id="title" />

          <label htmlFor="desc">Description:</label>
          <input type="text" onChange={this.handleChange} id="desc" />
        </form>
      </section>
    )
  }
}