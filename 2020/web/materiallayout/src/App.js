import React,{useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Pagination from './components/Pagination';
import {TaskBar} from './components/TaskBar';

function App() {
  let [currentData,setCurrentData] = useState([]);
  let [amountPerPage,setAmountPerPage] = useState(10);
  let [currentPage,setCurrentPage] = useState(0);

  useEffect(()=>{
  let fetchPosts = async () =>{
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');
    if(!result.ok){
      throw Error(result.status +" " + result.statusText);
    }
    let data = await result.json();
    setCurrentData(data);

  }
  fetchPosts();

  },[])

  let onClick = (page) => (e) => {
    setCurrentPage(page);

  }

  let startIndex = currentPage * amountPerPage;
  let endIndex = startIndex + amountPerPage;
  let barAmount = currentData.length / amountPerPage;
  

  return (
    <div className="App">
      <Sidebar>
        <Pagination data={currentData.slice(startIndex,endIndex)}/>
        <ul className="pagination-bar">
          <TaskBar number={barAmount} onClick={onClick} currentPage={currentPage}/>
        </ul>
      </Sidebar>

    </div>
  );
}

export default App;
