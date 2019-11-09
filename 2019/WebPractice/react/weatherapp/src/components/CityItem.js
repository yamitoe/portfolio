import React from "react";

export class CityItem extends React.Component {
  render() {
    return (
      <section className="container-cityitem">
        <h2>{this.props.city}</h2>
        <figure>
          <img src={this.props.img} alt={this.props.weather} />
          <figcaption>{this.props.temp}</figcaption>
          <figcaption>{this.props.desc}</figcaption>
        </figure>
        <div>
          <span>{this.props.min}</span>
          <span>{this.props.max}</span>
        </div>
      </section>
    );
  }
}
