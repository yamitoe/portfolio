import React from 'react';
export function Item(props) {
  return (
    <section className="container-item">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <div className="desc">{props.desc}</div>
    </section>
  );
}
