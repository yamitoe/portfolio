import React from 'react';
export class AddItemInput extends React.Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleSubmit = e => {
    let iteminputlist = {};
    e.preventDefault();
    e.target.childNodes.forEach(node => {
      if (node.tagName === 'INPUT') {
        iteminputlist[node.name] = node.value;
      }
    });
    console.log(iteminputlist);
    this.props.addItem(iteminputlist);
  };
  handleClick = e => {
    let x = document.getElementById('submitForm');
    let btn = document.getElementsByClassName('btnCancel')[0];

    if (!x.contains(e.target) || e.target === btn) {
      this.props.changeDisplay();
    }
  };
  render() {
    let display = this.props.displayOn
      ? { display: 'flex' }
      : { display: 'none' };
    return (
      <section id="handleSubmit" style={display}>
        <form onSubmit={this.handleSubmit} id="submitForm">
          <label htmlFor="img">Add Image</label>
          <input type="file" accept="image/*" id="img" name="img" />
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" />

          <label htmlFor="desc">Description:</label>
          <input type="text" name="desc" className="textarea" id="desc" />
          <button className="btnCancel">Cancel</button>
          <button>Save</button>
        </form>
      </section>
    );
  }
}
