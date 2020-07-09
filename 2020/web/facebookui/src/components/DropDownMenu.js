import React from "react";
import { ReactComponent as Cog } from "../icons/cog.svg";
import { ReactComponent as Chevron } from "../icons/chevron.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

export function DropDownMenu(props) {
  //settings
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropDownRef = useRef(null);
  const dropDownItemLeftRef = useRef(null);
  const dropDownItemRightRef = useRef(null);

  // useEffect(() => {
  //   setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  // }, []);

  function calcHeight() {
    //const height = el.offsetHeight;
    const height = dropDownRef.current.offsetHeight;
    setMenuHeight(height);
  }

  function calcHeightL() {
    //const height = el.offsetHeight;
    const height = dropDownItemLeftRef.current.offsetHeight;
    setMenuHeight(height);
  }

  function calcHeightR() {
    //const height = el.offsetHeight;
    const height = dropDownItemRightRef.current.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <a
        href="#"
        className="dropdownmenu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.lefticon}</span>
        {props.children}
        <span className="icon-right">{props.righticon}</span>
      </a>
    );
  }
  return (
    <div
      className="dropdownmenu"
      style={{ height: menuHeight }}
      ref={dropDownRef} //For height to change dynamcally
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeightL} //expects a function
        nodeRef={dropDownItemLeftRef}
      >
        <div className="menu" ref={dropDownItemLeftRef}>
          <DropDownItem lefticon={<Bell />}>My profile</DropDownItem>
          <DropDownItem
            lefticon={<Cog />}
            goToMenu={"settings"}
            righticon={<Chevron />}
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeightR}
        nodeRef={dropDownItemRightRef}
      >
        <div className="menu" ref={dropDownItemRightRef}>
          <DropDownItem lefticon={<Arrow />} goToMenu={"main"}>
            Settings
          </DropDownItem>
          <DropDownItem>Temp</DropDownItem>
          <DropDownItem>Temp</DropDownItem>
          <DropDownItem>Temp</DropDownItem>
          <DropDownItem>Temp</DropDownItem>
          <DropDownItem>Temp</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
