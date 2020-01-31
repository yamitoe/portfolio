import React, {useState} from 'react';
import './App.scss';
import {Square} from './Square';

function Board(){
  const arraryInit = 9;
  const [turn, setTurn] = useState("X");
  const [gameState,setGameState] =useState({
    board:Array(arraryInit).fill(null),
    history: [Array(arraryInit).fill(null)]
  });
  const [counter, setCounter] = useState(0);

  let handleClick = (index)=>{
    if(gameState.board[index] === null){
      handleBoard(index);
      handleTurn();
    }
  }
  let handleBoard = (index) =>{
    setGameState(prevBoard=>{
      let currBoard = prevBoard.board.slice();
      let currHistory = prevBoard.history.slice();
      currBoard.splice(index,1,turn);
      currHistory.push(currBoard); 
      return {board: currBoard, history: currHistory};
    });
  }
  
  let handleTurn =()=>{
    setTurn(prevTurn=>(prevTurn === "X") ? "O" : "X");
  }

  let buttonUndo = ()=>{
    let currIndex = (gameState.history.length -1) - (counter + 1);
    //Case when index is at 0
    if(currIndex <= 0){
      currIndex = 0;
    }
    setCounter(i=>i+1);
    setGameState(prevBoard =>{
      let arr = prevBoard.history.slice(currIndex, currIndex + 1);
      let merge = Object.assign(prevBoard,{board:arr})
      return merge;
    });
    
  }

  let makeSquare = (box)=>{
    return <Square num={gameState.board[box]} handleClick={()=> handleClick(box)}/>
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

      <button onClick={buttonUndo}>Undo</button>
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
