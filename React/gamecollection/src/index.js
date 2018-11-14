import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './tictacktoe/components/Board';
const imgs = {};

//.keys() - array of file paths
function importAll(r){
    r.keys().map(key=>imgs[key] = r(key));
}
//Folder,boolean reursion, regex //Webpacks 
importAll(require.context('./tictacktoe/images',false,/\.(png|jpe?g|svg)$/));
//Note since this is called when loading hoisting is not a thing

//move this module after done
class OnClick extends Component{
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
    
        /*this.setState(state=>({
            turn: !state.turn,
            boardData: !state.boardData.hasOwnProperty(id) ?
             Object.assign(state.boardData, ({[id]: !state.turn})):state.boardData
        }))*/
    
        /*document.getElementById(id).style.cssText =
        `background-image: url("${test}");
        object-fit: scale-down;`;*/
    
    }

    checkWinCondition(){
        //This really constrains the board to a 3x3 now
        let winPatters = ['0-0','0-1','0-2','1-0','1-1','1-2','2-0','2-1','2-2'];
        let test = ['0-0','0-1','0-2']; //for top row
        let arrX = [];
        let arrO = [];
        //Get keys
        let myKeys = Object.keys(this.state.boardData);
        console.log(this.state.boardData);
        console.log(myKeys);
        //Seperate x's and o's
        let matchingKey = myKeys.forEach(key=>{
            return (this.state.boardData[key] ? arrX.push(key) :
            arrO.push(key));
        })
        //(avb) equiv !(!a&!b)
        if(!test.some(value=>!arrX.includes(value)) && arrX.length !== 0){
            console.log("winner");
        }
        
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