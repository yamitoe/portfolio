import React from "react";
import plus from "../images/plus.png";
import grid from "../images/grid.png";
import scroll from "../images/scroll.png";

export class CityButton extends React.Component {
  state = { wrapOrScroll: true };

  wrapOrScroll = () => {
    let citywrap = document.getElementById("cityWrapper");
    if (this.state.wrapOrScroll) {
      citywrap.setAttribute("card-display", "wrap");
    } else {
      citywrap.setAttribute("card-display", "scroll");
    }
  };

  test = () => {
    this.setState(
      state => ({ wrapOrScroll: !state.wrapOrScroll }),
      () => this.wrapOrScroll()
    );
  };

  componentDidMount() {
    this.wrapOrScroll();
  }

  render() {
    return (
      <section className="container-buttoncity">
        <header>
          <h3>Add City</h3>
          <button onClick={this.props.modalDisplay}>
            <img src={plus} alt="addItem" />
          </button>
        </header>
        <footer>
          <button onClick={this.test} id="gridview">
            <img src={grid} alt="gridview" />
          </button>
          <button onClick={this.test} id="scrollview">
            <img src={scroll} alt="scrollview" />
          </button>
        </footer>
      </section>
    );
  }
}
