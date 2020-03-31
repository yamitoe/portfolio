import React,{useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Pagination from './components/Pagination';

function App() {
  let [currentData,setCurrentData] = useState(false);
  let [amountPerPage,setAmountPerPage] = useState(10);
  let [totalAmount,setTotalAmount] = useState(0);
  let [amountLeft,setAmountLeft] = useState(0)

  useEffect(()=>{
  let fetchPosts = async () =>{
  let result = await fetch('https://jsonplaceholder.typicode.com/todos');
  if(!result.ok){
    throw Error(result.status +" " + result.statusText);
  }
    let data = await result.json();
    setTotalAmount(data.length);
    //items currently displayed
    let displayData = <Pagination data={data.slice(0,10)}/>;
    console.log(displayData);
    setCurrentData(displayData);
    setAmountLeft(data.length - setAmountPerPage);
  
  }

  fetchPosts();

  },[])


  return (
    <div className="App">
      <Sidebar>
        {currentData}
      </Sidebar>

    </div>
  );
}

export default App;
