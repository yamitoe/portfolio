import React,{Component} from 'react';
import Board from './Board';
const imgs = {};

//.keys() - array of file paths
function importAll(r){
    r.keys().map(key=>imgs[key] = r(key));
}
//Folder,boolean reursion, regex //Webpacks 
importAll(require.context('../images',false,/\.(png|jpe?g|svg)$/));
//Note since this is called when loading hoisting is not a thing

//local state can be mutable //to keep history must save to another state 
class TickTackToe extends Component{
    constructor(props){
        super(props);
        this.state = {
            turn: true,
            boardData: {}
        };
        this.handleTurn = this.handleTurn.bind(this);
    }

    handleTurn(e,id){
        if(!this.state.boardData.hasOwnProperty(id)){
            this.setState(state=>({
                turn: !state.turn,
                boardData: Object.assign(state.boardData, ({[id]: state.turn}))
            }),()=>this.checkWinCondition())

            document.getElementById(id).innerHTML = 
            `<img alt='${this.state.turn}' src='${this.state.turn ? imgs['./x.png'] : imgs['./o.png']}'/>`;
        }
    }

    checkWinCondition(){
        //This really constrains the board to a 3x3 now
        let arrX = [];
        let arrO = [];
        
        let winCondition = [['0-0','0-1','0-2'],['1-0','1-1','1-2'],['2-0','2-1','2-2'],
        ['0-0','1-0','2-0'],['0-1','1-1','2-1'],['0-2','1-2','2-2'],
        ['0-0','1-1','2-2'],['0-2','1-1','2-0']];

        //Get keys
        let myKeys = Object.keys(this.state.boardData);
        //Seperate x's and o's
        let matchingKey = myKeys.forEach(key=>{
            return (this.state.boardData[key] ? arrX.push(key) :
            arrO.push(key));
        })

      winCondition.forEach(key=>{
        //(avb) equiv !(!a&!b)
          if(this.includeKeyLength(arrX,key) || this.includeKeyLength(arrO,key)){
            //if won, change to red
            key.forEach(key=>document.getElementById(key).style.cssText =
            `background-color: red;`)
          }
        })   
    }
    
    includeKeyLength(arr,key){
        return !key.some(value=>!arr.includes(value)) && arr.length !== 0;
    }
    

    render(){
        return(
            <Board x={3} y={3} turn={this.handleTurn}/>
        );
    } 
}
export default TickTackToe;
