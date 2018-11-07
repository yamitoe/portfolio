import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './tictacktoe/components/Board';

class Test extends Component{
    render(){
        return(
            <div>test</div>
        );
    }
    
}

ReactDOM.render(
    <Test/>,
    document.getElementById('root')
);