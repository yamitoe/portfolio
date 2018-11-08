import React from 'react';
import '../sass/board.css';
function Board({x,y}){
    let arr = [];
    for(let row = 0; row < y; row++){
        let inner = [];
        for(let column = 0; column< x; column++){
            inner.push(<div className='square'></div>);
        }
        arr.push(<div className='row' key={row}>
            {inner}
        </div>);
    }
    //console.log(y);

    return(
        <section className='board'>
            {arr}
        </section>
    );
}
export default Board;