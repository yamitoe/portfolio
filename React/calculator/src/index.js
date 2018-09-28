import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css'
import { Component } from 'react';
import { Buttons } from './components/buttons';

//Make a basic calculator
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {};

    }
    //for now only keys that are on keyboard //don't want to crop images
    createButtons(arr){
        return arr.map((x)=>{
            return <Buttons func="onClickFunc" name={x} key={x}/> 
        })
    }

    render(){
       // let arr = [0,1,2,3,4,5,6,7,8,9,'.','+','-','*','/','=','CE'];
       let arr = [9,8,7,'X',6,5,4,'-',3,2,1,'+','+-',0,'.','='];
       let operation = ['CE','C','x^2','/'];
        return(
            <div>
                <section className="display">
                    <div></div>
                </section>
                <section className="buttons">
                    {this.createButtons(operation)}
                    <section className="numbers">
                        {this.createButtons(arr)}
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