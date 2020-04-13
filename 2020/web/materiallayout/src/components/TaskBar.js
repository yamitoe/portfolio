import React from "react";
import "./pagination.scss";

export function TaskBar({number}){
    let tempArray = [];
    for(let x = 1; x <= number; x++){
        tempArray.push(<li key={"BAR"+x}>{x}</li>);
    }

    return(
        <React.Fragment>
            {tempArray}
        </React.Fragment>

    )
}