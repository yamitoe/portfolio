import React from "react";
import close from "../images/close.png";
import "./modal.scss";

export class Modal extends React.Component {
  componentDidMount(){
    document.addEventListener('click',this.closeModal);
  }

  componentWillUnmount(){
    document.removeEventListener('click',this.closeModal);
  }

  closeModal = e=>{
    const list = ['modal-container','btnCancel','cancelIcon'];
    if(list.includes(e.target.className)){
      //If clicked outside, hide modal
       this.props.modalDisplay();
    }
    else if(e.target.className === 'btnConfirm'){
      e.preventDefault();

      this.props.onSubmit(e);
      this.props.modalDisplay();
    }
  };

  render() {
    return (
      <section className="modal-container">
        <div className="modal">
          <header>
            <span className="title">Add {this.props.title}</span>
            <button className="cancelIcon">
              <img className="cancelIcon" src={close} alt="cancel" />
            </button>
          </header>
          <form className="core">{this.props.children}</form>
          <footer>
            <button className="btnConfirm">Confirm</button>
            <button className="btnCancel">Cancel</button>
          </footer>
        </div>
      </section>
    );
  }
}
