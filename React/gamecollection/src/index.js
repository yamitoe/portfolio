import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './tictacktoe/components/Board';
const imgs = {};

//.keys() - array of file paths
function importAll(r){
    r.keys().map(key=>imgs[key] = r(key));
}
//Folder,boolean reursion, regex
importAll(require.context('./tictacktoe/images',false,/\.(png|jpe?g|svg)$/));
//Note since this is called when loading hoisting is not a thing

//move this module after done
class OnClick extends Component{
    constructor(props){
        super(props);
        this.state = {turn: true};
        this.handleTurn = this.handleTurn.bind(this);
    }

    handleTurn(e,id){
        console.log("dabbing for justice");
        this.setState(state=>({
            turn: !state.turn
        }))
        /*document.getElementById(id).style.cssText =
        `background-image: url("${test}");
        object-fit: scale-down;`;*/
        document.getElementById(id).innerHTML = 
        `<img alt='${this.state.turn}' src='${this.state.turn ? imgs['./x.png'] : imgs['./o.png']}'/>`;
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