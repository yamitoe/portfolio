import React from 'react';


export default function Pagination({data}) {
  return (
    <section className="container-content">
      {data.map(output=>{
        return (
        <article>
          {output}
        </article>
        )
      })}
    </section>
  );
}
