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
        iteminputlist[node.name] =
          node.name !== 'img'
            ? node.value
            : window.URL.createObjectURL(node.files[0]);
        node.value = '';
      }
    });
    e.target.reset();
    this.props.addItem(iteminputlist);
  };
  handleClick = e => {
    let form = document.getElementById('submitForm');
    let btn = document.getElementsByClassName('btnCancel')[0];
    if (
      (!form.contains(e.target) && this.props.displayOn !== false) ||
      e.target === btn
    ) {
      this.props.changeDisplay();
      form.reset();
    }
  };

  handleClear = e => {};
  render() {
    let display = this.props.displayOn
      ? { display: 'flex' }
      : { display: 'none' };
    return (
      <section id="handleSubmit" style={display}>
        <form onSubmit={this.handleSubmit} id="submitForm">
          <label htmlFor="img">Add Image</label>
          <input type="file" accept="image/*" id="img" name="img" required />
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" required />

          <label htmlFor="desc">Description:</label>
          <textarea
            name="desc"
            className="textarea"
            id="desc"
            required
          ></textarea>
          <button className="btnCancel">Cancel</button>
          <button>Save</button>
        </form>
      </section>
    );
  }
}
