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
    e.target.childNodes
    .forEach(node=>{
      console.log(node.tagName);
      if(node.tagName === 'INPUT'){
        console.log('hi')
      }
    })
  }
  handleClick=(e)=>{
    let x = document.getElementById('submitForm');
    let btn = document.getElementsByClassName('btnCancel')[0];

    if(!x.contains(e.target) || e.target === btn ){
      this.props.changeDisplayOff();
    }

  }
  render(){
    let display = this.props.displayOn ? {display:'flex'} : {display:'none'};
    return(
      <section id="handleSubmit" style={display}>
        <form onSubmit={this.handleSubmit} id="submitForm">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />

          <label htmlFor="desc">Description:</label>
          <input type="text" id="desc" />
          <button className="btnCancel">Cancel</button>
          <button>Save</button>
        </form>
      </section>
    )
  }
}