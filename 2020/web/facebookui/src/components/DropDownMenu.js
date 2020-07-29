import React from "react";
import { ReactComponent as Cog } from "../icons/cog.svg";
import { ReactComponent as Chevron } from "../icons/chevron.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as SunMoon } from "../icons/sunmoon.svg";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

export function DropDownMenu(props) {
  //settings
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  //For theme changer
  const [checked, setChecked] = useState(true);

  //when theme is changed
  // useEffect(()=>{
  //   if (localStorage.getItem("theme") === "dark") {
  //     localStorage.setItem("theme","light");
  //   }
  //   else{
  //     localStorage.setItem("theme","dark");
  //   }

  // },[checked]);
  const dropDownRef = useRef(null);
  const dropDownItemLeftRef = useRef(null);
  const dropDownItemRightRef = useRef(null);

  function checkSwap(e) {
    //setChecked((curr)=>!curr);

    console.log("asa");
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }

  //For Refs
  function calcHeightL() {
    const height = dropDownItemLeftRef.current.offsetHeight;
    setMenuHeight(height);
  }

  function calcHeightR() {
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
            lefticon={<SunMoon></SunMoon>}
            righticon={<ToggleSwitch checked={checked} onClick={checkSwap} />}
          >
            Dark Theme
          </DropDownItem>
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
