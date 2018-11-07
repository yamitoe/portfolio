import React from 'react';
function Board(x,y){
    let arr = [];
    let inner = "";
    for(let row = 0; row < y; row++){
        for(let column = 0; column< x; column++){
            inner=<div className='square'></div>;
        }
        arr.push(<div className='row'>
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