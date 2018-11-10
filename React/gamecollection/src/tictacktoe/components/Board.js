import React from 'react';
import '../sass/board.css';
function Board({x,y,turn}){
    let arr = [];
    for(let row = 0; row < y; row++){
        let inner = [];
        for(let column = 0; column< x; column++){
            let squareid = row+"-"+column;
            inner.push(<div className='square' onClick={e=>turn(e,squareid)} id={squareid} key={column}>
                
            </div>);
        }
        arr.push(<div className='row' key={row}>
            {inner}
        </div>);
    }


    return(
        <section className='board'>
            {arr}
        </section>
    );
}
export default Board;