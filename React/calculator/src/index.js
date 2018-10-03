import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css'
import { Component } from 'react';
import {CreateButtons} from './components/createbuttons';
import {operationMap} from './data/operationmap';


//Make a basic calculator
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstValue: 0,
            lastValue:0,
            operator: null
        };

        this.onClickFunc = this.onClickFunc.bind(this);

    }
    //Get operators from my object operators map
    handleOperators = op1 => {
        this.setState({operator: operationMap[op1]});
      }

    //events //Sythetic Event
    onClickFunc(e){
        //console.log(e.target.className);
        if(e.target.className === "number"){
            //Keep choosing firstValue if operator not set
            if(this.state.operator === null){
                this.setState({firstValue: e.target.value});
            }
            else{//If operator is set, add the second number
                this.setState({lastValue: e.target.value});
            }
           
        }
        else{
            let call = this.state;

            if(e.target.value === '='){
                if(call.operator !== null){
                    let total = call.operator(call.firstValue,call.lastValue);
                    this.setState({firstValue: total});
                }
            }
            else{
                //if operation exsist in our map
                if(operationMap.hasOwnProperty(e.target.value)){
                    this.handleOperators(e.target.value);
                }
                else{//Ones I can't group all together
                    switch(e.target.value){
                        case 'x^2':
                        this.setState((value)=>{
                            return {firstValue: Math.pow(parseFloat(value.firstValue),2)}
                        });
                        break;
                        case 'C':
                            this.setState({firstValue:0,lastValue:0,operator:null});
                            break;
                        case '+-':
                        //Make first number neg
                            if(this.state.operator === null){
                                this.setState((value)=>{
                                    return {firstValue: (-parseFloat(value.firstValue)) }
                                });
                            }
                            else{//Make last number neg
                                this.setState((value)=>{
                                    return {lastValue: (-parseFloat(value.lastValue)) }
                                });
                            }
                            break;
                        default:
                            this.setState({operator: null});
                    }
                }

            }
        }

    }

    render(){
       //If I made array of objects I would be able to apply specific CSS 
       //IE - value:1,className:number -Can pass to map and all class by this name can be bolded
       let arr = [9,8,7,'X',6,5,4,'-',3,2,1,'+','+-',0,'.','='];
       let operation = ['C','','x^2','/'];
        return(
            <div>
                <section className="display">
                    <div>{this.state.firstValue}</div>
                </section>
                <section className="buttons">
                    <CreateButtons arr={operation} onClickFunc={this.onClickFunc}/>
                    <section className="numbers">
                        <CreateButtons arr={arr} onClickFunc={this.onClickFunc}/>
                    </section>
                </section>
            </div>
        );
    }  
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById("root")
);