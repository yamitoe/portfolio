import React from "react";
import close from "../images/close.png";
import "./modal.scss";

export class Modal extends React.Component {
  render() {
    return (
      <section className="modal-container">
        <div className="modal">
          <header>
            <span className="title">Add {this.props.title}</span>
            <button className="cancelIcon">
              <img src={close} alt="cancel" />
            </button>
          </header>
          <div className="core">{this.props.children}</div>
          <footer>
            <button className="btnConfirm">Confirm</button>
            <button className="btnCancel">Cancel</button>
          </footer>
        </div>
      </section>
    );
  }
}
