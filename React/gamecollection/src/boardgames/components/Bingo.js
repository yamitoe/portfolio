import React, {Component} from 'react';
import Board from './shared/Board';

class Bingo extends Component{
    //use class field syntax
    //Events
    componentDidMount(){
        this.setState({boardNum: this.random(25)});
        document.getElementsByClassName('board')[1].addEventListener("click", this.onclick);
    }

    componentWillUnmount(){
        window.addEventListener("onclick", this.onclick);
    }

    //state
    state = {
        winRolls: [],
        boardNum: []
    };

    //Methods
    random = (max,arr2) =>{
        let arr = arr2 ? arr2.slice() : [];
        let num;
        let numLimit = 51;
        while(arr.length < max && numLimit > max){
            num = Math.floor(Math.random() * numLimit);
            if(!arr.includes(num)){
                arr.push(num);
            }
        }
       return arr;
    };

    onclick = (e) =>{
        if(e.target.className === "square" && this.state.winRolls.includes(parseInt(e.target.innerHTML,10))){
            e.target.style.cssText = `background-color: blue`;
        }  
    };

    gameStart = () =>{
        //Winning numbers
        let rollsArr = this.random(this.state.winRolls.length +1, this.state.winRolls);
        this.setState({winRolls: rollsArr});
    
        //Add keyframs or transitions //one at a time
    }

    render(){
        return(
            <div>
                   <Board x={5} y={5} data={this.state.boardNum}/>
                   <button type="button" onClick={this.gameStart}>Start Game</button>
                   <div>{this.state.winRolls.map(x=>x+" ")}</div>
            </div>
          
        )
    }
}

export default Bingo;