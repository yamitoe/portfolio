import React from 'react';


export default function Pagination({data}) {
  return (
    <section className="container-content">
      {data.map(output=>{
        return (
        <article key={output.id}>
          <div>{output.userId}</div>
          <div>{output.id}</div>
        </article>
        )
      })}
    </section>
  );
}
