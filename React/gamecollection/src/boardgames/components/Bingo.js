import React, {Component} from 'react';
import Board from './shared/Board';

class Bingo extends Component{
    //use class field syntax
    //events
    componentDidMount(){
        window.addEventListener("click", this.onclick);
    }

    componentWillUnmount(){
        window.addEventListener("onclick", this.onclick);
    }

    //state
    state = {
        test: 0,
        stuff: 5
    };

    //Randomizer
    random = () =>{

    };

    onclick = (e) =>{
       console.log(e.target);
       e.target.style.cssText = `background-color: blue`;
       
    };

    render(){
        return(
            <div>
                   <Board x={5} y={5}/>
            <span>{this.state.test} aa</span>
          
            </div>
          
        )
    }
}

export default Bingo;