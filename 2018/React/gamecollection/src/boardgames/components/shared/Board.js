import React from 'react';
import '../../sass/board.css';
function Board(props){
    let {x,y,turn,data} = props;
    let arr = [];
    for(let row = 0; row < y; row++){
        let inner = [];
        for(let column = 0; column< x; column++){
            inner.push(<div className='square' onClick={turn} key={column}>
                {data ? data[(row*y)+column] : null}
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