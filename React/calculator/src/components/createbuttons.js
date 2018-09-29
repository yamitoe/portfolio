import React from 'react';
import { Buttons } from './buttons';

//for now only keys that are on keyboard //don't want to crop images
export function CreateButtons(props){
    //convert to array of objects
    let arrObj = props.arr.map((value)=>{
        //Spread syantax //Assumeing babel converts newest ES2018 to old version //Merges(Object Literal)
            return {value, ...(typeof value ==="number") ? {class:"number"} : {} }
        });

    return arrObj.map((x)=>{
        return <Buttons func={props.onClickFunc} name={x.value} key={x.value} className={x.class}/> 
    })
}