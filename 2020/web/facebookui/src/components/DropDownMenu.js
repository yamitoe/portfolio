import React from "react";
import { ReactComponent as Cog } from "../icons/cog.svg";
import { ReactComponent as Chevron } from "../icons/chevron.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export function DropDownMenu(props) {
  //settings
  const [activeMenu, setActiveMenu] = useState("main");
  function DropDownItem(props) {
    return (
      <a href="" className="dropdownmenu-item">
        <span className="icon-button">{props.lefticon}</span>
        {props.children}
        <span className="icon-right">{props.righticon}</span>
      </a>
    );
  }
  return (
    <div className="dropdownmenu">
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500}>
        <DropDownItem>My profile</DropDownItem>
        <DropDownItem lefticon={<Cog />} righticon={<Chevron />}></DropDownItem>
      </CSSTransition>
    </div>
  );
}
