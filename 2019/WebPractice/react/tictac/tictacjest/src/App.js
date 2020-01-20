import React, {useState} from 'react';
import './App.scss';
import {Square} from './Square';

function Board(){
  const [board, setBoard] = useState(Array(9).fill(null));

  let handleClick = (index)=>{
    console.log(index);
    if(board[index] === null){
      let copy = [...board];
      copy.splice(index,1,85);
      console.log(copy);
      setBoard(copy);
    }
  }

  let makeSquare = (box)=>{
    return <Square num={board[box]} handleClick={()=> handleClick(box)}/>
  }

  return(
    <section className="board">
      <div>
        {makeSquare(0)}
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
