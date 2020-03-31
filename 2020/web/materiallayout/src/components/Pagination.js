import React from 'react';
import "./pagination.scss";


export default function Pagination({data}) {
  return (
    <section className="container-content">
      {data.map(output=>{
        return (
        <article key={output.id}>
          <div>User ID: {output.userId}</div>
          <div>ID: {output.id}</div>
        </article>
        )
      })}
    </section>
  );
}
