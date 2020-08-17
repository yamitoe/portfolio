import React, { useEffect, useState } from "react";
import "./sampledata.scss";
//Material UI
import Pagination from "@material-ui/lab/Pagination";

export function SampleData(props) {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <section className="sampleData">
      {posts.map((val) => {
        return (
          <article className="posts">
            <h3>{val.title}</h3>
            <div>{val.body}</div>
          </article>
        );
      })}
      <Pagination count={10} variant="outlined" />
    </section>
  );
}
