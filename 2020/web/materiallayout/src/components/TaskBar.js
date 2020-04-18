import React from "react";
import "./pagination.scss";

export function TaskBar({number,onClick}){
    let tempArray = [];
    for(let x = 0; x < number; x++){
        tempArray.push(<li key={"BAR"+x} onClick={onClick(x)}>{x}</li>);
    }

    return(
        <React.Fragment>
            {tempArray}
        </React.Fragment>

    )
}