import React, { useState } from "react";
import "./App.scss";
import { Square } from "./Square";

function Board() {
  const arraryInit = 9;
  const [turn, setTurn] = useState("X");
  const [gameState, setGameState] = useState({
    board: Array(arraryInit).fill(null),
    history: [Array(arraryInit).fill(null)]
  });
  const [counter, setCounter] = useState(0);

  let handleClick = index => {
    if (gameState.board[index] === null) {
      handleBoard(index);
      handleTurn();
    }
  };
  let handleBoard = index => {
    setGameState(prevBoard => {
      let currBoard = prevBoard.board.slice();
      let currHistory;
      currBoard.splice(index, 1, turn);
      //Means a undo has been done
      if (counter > 0) {
        let currIndex = gameState.history.length - 1 - counter;
        currHistory = prevBoard.history.slice(0, currIndex + 1);
        setCounter(0);
      } else {
        currHistory = prevBoard.history.slice();
      }
      currHistory.push(currBoard);
      return { board: currBoard, history: currHistory };
    });
  };

  let handleTurn = () => {
    setTurn(prevTurn => (prevTurn === "X" ? "O" : "X"));
  };

  let buttonUndo = () => {
    //Minus by 1 more value
    let currIndex = gameState.history.length - 1 - counter;
    let maxCount = gameState.history.length - 1; //Every jump in the list

    let toIndex =
      counter < maxCount
        ? gameState.history.length - 1 - (counter + 1)
        : currIndex;
    //Case when index is 0 and above //If not outofbounds
    console.log(toIndex);
    if (currIndex > 0) {
      setCounter(i => i + 1);
    }
    //change the currently displayed board
    setGameState(prevBoard => {
      //copy data
      let arr = prevBoard.history.slice();
      //Get the previous board from history
      let [lastArr] = arr.splice(toIndex, 1);
      let merge = { ...prevBoard, board: lastArr };
      return merge;
    });
  };

  let buttonRedo = () => {
    let currIndex = gameState.history.length - 1 - counter;
    //IF only one index return current index //Minus by one less value (going up)
    let toIndex =
      counter > 0 ? gameState.history.length - 1 - (counter - 1) : currIndex;

    if (currIndex < gameState.history.length - 1) {
      setCounter(i => i - 1);
    }

    //change the currently displayed board
    setGameState(prevBoard => {
      let arr = prevBoard.history.slice();
      //Get the previous board from history
      let [lastArr] = arr.splice(toIndex, 1);
      let merge = { ...prevBoard, board: lastArr };
      return merge;
    });
  };

  let makeSquare = box => {
    return (
      <Square num={gameState.board[box]} handleClick={() => handleClick(box)} />
    );
  };

  return (
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
      <div>
        <button onClick={buttonUndo}>Undo</button>
        <button onClick={buttonRedo}>Redo</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      {document.body.setAttribute("backColor", "tictac")}
      <Board />
    </div>
  );
}

export default App;
