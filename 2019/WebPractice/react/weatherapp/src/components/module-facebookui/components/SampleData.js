import React, { useEffect, useState } from "react";
import "./sampledata.scss";
//Material UI
import Pagination from "@material-ui/lab/Pagination";

export function SampleData(props) {
  let [posts, setPosts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      let data = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      setPosts(data);
    }
    fetchData();
  }, []);

  let updatePage = (event, page) => {
    setCurrentPage(page);
  };

  const postsPerPage = 5;
  let pageCount = posts.length / postsPerPage;

  let beginPage = (currentPage - 1) * postsPerPage; //Page starts from 1
  let endPage = beginPage + postsPerPage;
  let currentPosts = posts.slice(beginPage, endPage);

  return (
    <section className="sampleData">
      {currentPosts.map(val => {
        return (
          <article className="posts" key={val.title}>
            <h3>{val.title}</h3>
            <div>{val.body}</div>
          </article>
        );
      })}
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={updatePage}
        variant="outlined"
      />
    </section>
  );
}
