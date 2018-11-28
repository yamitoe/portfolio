import React, {Component} from 'react';
import Board from './shared/Board';

class Bingo extends Component{
    //use class field syntax
    //Events
    componentDidMount(){
        document.getElementsByClassName('board')[1].addEventListener("click", this.onclick);
    }

    componentWillUnmount(){
        window.addEventListener("onclick", this.onclick);
    }

    //state
    state = {
        test: 0,
        stuff: 5
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
        console.log(rollsArr);
        console.log(arr2);
        //Add keyframs or transitions //one at a time
    }

    render(){
        let nums = this.random(25);
        return(
            <div>
                   <Board x={5} y={5} data={nums}/>
                   <button type="button" onClick={this.gameStart}>Start Game</button>
            </div>
          
        )
    }
}

export default Bingo;