import React from 'react';
import './App.scss';
import starimg from "./imgs/starimg.jpg"
import stars from "./imgs/stars.mp4";

function App() {
  return (
    <section>
      <div className="test">
        <video poster={starimg} autoPlay loop muted src={stars} ></video>
        <article>
          <h1>Fullscreen Background</h1>
        </article>
      </div>
      <div>
        Testing other 
      </div>




    </section>
  );
}

export default App;
