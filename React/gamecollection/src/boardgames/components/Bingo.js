import React, {Component} from 'react';
import Board from './shared/Board';

class Bingo extends Component{
    render(){
        return(
            <Board x={5} y={5}/>
        )
    }
}

export default Bingo;