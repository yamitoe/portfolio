import React from "react";
import {ReactComponent as Cog} from "../icons/cog.svg"
import {ReactComponent as Chevron} from "../icons/chevron.svg"
import {ReactComponent as Bell} from '../icons/bell.svg';

export function DropDownMenu(props){
    function DropDownItem(props){
        return(
            <a href="" className="dropdownmenu-item">
                <span className="icon-button">{props.lefticon}</span>
                {props.children}
                <span className="icon-right">{props.righticon}</span>
            </a>
        )
    }
    return (
        <div className="dropdownmenu">
            <DropDownItem>My profile</DropDownItem>
            <DropDownItem 
            lefticon={<Cog/>}
            righticon={<Chevron/>}
            >
            </DropDownItem>
   

        </div>
    )
}