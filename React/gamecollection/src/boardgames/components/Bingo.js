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
        test: [],
        boardNum: []
    };

    //Methods
    random = (max,arr2) =>{
        let arr = arr2 ? arr2.slice() : [];
        let num;
        while(arr.length < max){
            num = Math.floor(Math.random() * 51);
            if(!arr.includes(num)){
                arr.push(num);
            }
        }
       return arr;
    };

    onclick = (e) =>{
        console.log(e.target.className);
        if(e.target.className === "square"){
            e.target.style.cssText = `background-color: blue`;
        }  
    };

    gameStart = () =>{
        //Winning numbers
        let arr2 = [];
        let rollsArr = this.random(1,arr2);
        this.setState(state=>({
            test:state.test.concat(rollsArr)
        }));
    
        //Add keyframs or transitions //one at a time
    }

    render(){
        return(
            <div>
                   <Board x={5} y={5} data={this.state.boardNum}/>
                   <button type="button" onClick={this.gameStart}>Start Game</button>
            </div>
          
        )
    }
}

export default Bingo;