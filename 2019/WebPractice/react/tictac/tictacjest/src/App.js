import React, {useState} from 'react';
import './App.scss';
import {Square} from './Square';

function Board(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [history,setHistory] = useState([board]);

  let handleClick = (index)=>{
    if(board[index] === null){
      handleBoard(index);
      handleTurn();
      handleHistory();


    }
  }
  let handleBoard = (index) =>{
    setBoard(prevBoard=>{
      let currBoard = prevBoard.slice();
      currBoard.splice(index,1,turn);
      return currBoard;
    });
  }
  
  let handleTurn =()=>{
    setTurn(prevTurn=>(prevTurn === "X") ? "O" : "X");
  }

  let handleHistory = () =>{
    setHistory(prevHistory=>{
      let currHistory = prevHistory.slice();
      currHistory.push(board);
      return currHistory;
    });
  }

  let makeSquare = (box)=>{
    return <Square num={board[box]} handleClick={()=> handleClick(box)}/>
  }

  return(
    <section className="board">
      <div>
        {makeSquare(0)}
        {makeSquare(1)}
        {makeSquare(2)}
      </div>
      <div>
        {makeSquare(3)}
        {makeSquare(4)}
        {makeSquare(5)}
      </div>
      <div>
        {makeSquare(6)}
        {makeSquare(7)}
        {makeSquare(8)}
      </div>

      <button>Undo</button>
      <button>Redo</button>
    </section>
  )
    
}


function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
