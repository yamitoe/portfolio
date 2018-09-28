import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css'
import { Component } from 'react';
import { Buttons } from './components/buttons';

//Make a basic calculator
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {currentValue: 0};

        this.onClickFunc = this.onClickFunc.bind(this);

    }
    //for now only keys that are on keyboard //don't want to crop images
    createButtons(arr){
        //convert to array of objects
        let arrObj = arr.map((value)=>{
            //Spread syantax //Assumeing babel converts newest ES2018 to old version //Merges(Object Literal)
               return {value, ...(typeof value ==="number") ? {class:"number"} : {} }
           });

        return arrObj.map((x)=>{
            return <Buttons func={this.onClickFunc} name={x.value} key={x.value} className={x.class}/> 
        })
    }
    //events
    onClickFunc(e){
        console.log(e.target.value);
        this.setState((state)=>{
            console.log(1);
            return {currentValue: state.currentValue};
        });
    }

    render(){
       //If I made array of objects I would be able to apply specific CSS 
       //IE - value:1,className:number -Can pass to map and all class by this name can be bolded
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