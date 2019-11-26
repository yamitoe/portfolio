import React from "react";

export class CityItem extends React.Component {
  render() {
    return (
      <section className="container-cityitem">
        <h3>{this.props.city}</h3>
        <figure>
          <img src={this.props.img} alt={this.props.weather} />
          <figcaption>{this.props.temp} C</figcaption>
          <figcaption>{this.props.desc}</figcaption>
        </figure>
        <div className="container-minmax">
          <span>Min: {this.props.min}</span>
          <span>Max: {this.props.max}</span>
        </div>
        <footer></footer>
      </section>
    );
  }
}
