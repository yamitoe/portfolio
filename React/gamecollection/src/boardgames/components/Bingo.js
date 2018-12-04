import React, {Component} from 'react';
import Board from './shared/Board';
import update from 'immutability-helper';

class Bingo extends Component{
    //use class field syntax
    //Events
    componentDidMount(){
        this.setState({boardNum: this.random(25)});
        document.getElementsByClassName('board')[1].addEventListener("click", this.onclick);
    }

    componentWillUnmount(){
        document.removeEventListener("click", this.onclick);
    }

    //state
    state = {
        winRolls: [],
        boardNum: [],
        boardHistory: Array(25).fill(null),
        winner: null
    };

    //Methods
    random = (max,arr2) =>{
        let arr = arr2 ? arr2.slice() : [];
        let num;
        const numLimit = 51;
        while(arr.length < max && numLimit >= max){
            num = Math.floor(Math.random() * numLimit);
            if(!arr.includes(num)){
                arr.push(num);
            }
        }
       return arr;
    };

    onclick = (e) =>{
        console.log(this.state.boardHistory);
        //this.setState(state=>{state.boardHistory[2] = true;});
        //console.log(this.state.boardHistory); 
        let clickNumber = parseInt(e.target.innerHTML,10);
        if(e.target.className === "square" && this.state.winRolls.includes(clickNumber)){
            e.target.style.cssText = `background-color: blue`;
            //Add data
            this.setState({
                boardHistory: update(this.state.boardHistory,{
                    $splice: [[this.state.boardNum
                        .findIndex(x=>x===clickNumber), 1, true]]
                })
            });
            console.log(this.state.boardHistory);
        }  

        this.calWinner();
    };

    gameStart = () =>{
        //Winning numbers
        let rollsArr = this.random(this.state.winRolls.length +1, this.state.winRolls);
        this.setState({winRolls: rollsArr});
        //Add keyframs or transitions //one at a time
    }

    calWinner = () =>{
        let winHor = [[0,1,2,3,4],[5,6,7,8,9],
        [10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]];
        let winVert = this.createWinVert(winHor,5);
        let winDiag = this.createWinDiagonal(winHor);
        let winDiag2 = this.createWinDiagonal2(winHor);
        let winCondtion = [...winHor,...winVert,...winDiag,...winDiag2];

       // boardHistory > Per winCondtion
       if(winCondtion
        .some(arr=> arr
            .every(index=>this.state.boardHistory[index] === true))){
            this.setState({winner: "Winner"});
       }
    }
    //Figure out how to refractor these later
    createWinVert= (data,counter)=>{
        let arr = [];
        for(let z = 0; z < counter; z++){
            arr.push(data.map(x=>x[z]));
        }
        return arr;
    }

    createWinDiagonal = (data)=>{
        let arr = [];
        arr.push(data.map((x,index)=>x[index]));   
        return arr;
    }

    createWinDiagonal2 = (data)=>{
        let arr = [];
        let temp = data.length - 1;
        arr.push(data.map(x=>x[temp--]));
        return arr;
    }



    render(){
        return(
            <div>
                   <Board x={5} y={5} data={this.state.boardNum}/>
                   <button type="button" onClick={this.gameStart}>Start Game</button>
                   <div>{this.state.winRolls.map(x=>x+" ")}</div>
                   <h2>{this.state.winner}</h2>
            </div>
          
        )
    }
}

export default Bingo;