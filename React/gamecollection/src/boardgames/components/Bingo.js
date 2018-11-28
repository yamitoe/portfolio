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
    random = () =>{
        let arr = [];
        let num;
        while(arr.length < 25){
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

    render(){
        let nums = this.random();
        return(
            <div>
                   <Board x={5} y={5} data={nums}/>
            </div>
          
        )
    }
}

export default Bingo;