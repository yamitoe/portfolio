import React from "react";
import "./pagination.scss";

export function TaskBar({number,onClick,currentPage}){
    let tempArray = [];
    for(let x = 0; x < number; x++){
        if(x === currentPage){
            tempArray.push(<li key={"BAR"+x} class="selected" >{x}</li>);
        }
        else{
            tempArray.push(<li key={"BAR"+x} onClick={onClick(x)}>{x}</li>);
        }
    }

    return(
        <React.Fragment>
            {tempArray}
        </React.Fragment>

    )
}