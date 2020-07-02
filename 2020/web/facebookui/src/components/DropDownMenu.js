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
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
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
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
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
        onEnter={calcHeight}
      >
        <div className="menu">
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
