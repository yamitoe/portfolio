import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './tictacktoe/components/Board';

class Test extends Component{
    render(){
        return(
            <Board x={3} y={3}/>
        );
    }
    
}

ReactDOM.render(
    <Test/>,
    document.getElementById('root')
);