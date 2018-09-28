import React from 'react';
export function Buttons(props){
    return(
        <React.Fragment>
            <button onClick={props.func}>{props.name}</button>
        </React.Fragment>
    )

}