import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './tictacktoe/components/Board';

//move this module after done
class OnClick extends Component{
    constructor(props){
        super(props);
        this.state = {turn: true};

        this.handleTurn = this.handleTurn.bind(this);
    }

    handleTurn(e,square){
        console.log("dabbing for justice");
        console.log(square);
        this.setState(state=>({
            turn: !state.turn
        }))
    }


   

 
    render(){
        return(
            <Board x={3} y={3} turn={this.handleTurn}/>
        );
    }
    
}

ReactDOM.render(
    <OnClick/>,
    document.getElementById('root')
);