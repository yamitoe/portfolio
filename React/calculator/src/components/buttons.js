import React from 'react';
export function Buttons(props){
    return(
        <React.Fragment>
            <button onClick={props.func} value={props.name} >{props.name}</button>
        </React.Fragment>
    )

}