import React, { useState, useEffect } from "react";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { NavItem } from "./components/NavItem";
import { DropDownMenu } from "./components/DropDownMenu";
import { SampleData } from "./components/SampleData";
//SVG
import { ReactComponent as Arrow } from "./icons/arrow.svg";
import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Bolt } from "./icons/bolt.svg";
import { ReactComponent as Bell } from "./icons/bell.svg";
import { ReactComponent as Caret } from "./icons/caret.svg";

export function App() {
  //For theme changer
  const [checked, setChecked] = useState(true);

  //on first load theme is set to dark
  useEffect(() => {
    //if empty, dark theme is default
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    }
    document.body.setAttribute("theme", localStorage.getItem("theme"));
    setChecked(localStorage.getItem("theme") === "dark" ? true : false);
  }, []);

  return (
    <div className="App">
      <NavBar>
        <NavItem img={<Arrow />} />
        <NavItem img={<Plus />} />
        <NavItem img={<Bolt />} />
        <NavItem img={<Caret />}>
          <DropDownMenu checked={checked} checkedFunc={setChecked} />
        </NavItem>
      </NavBar>
      <SampleData />
    </div>
  );
}

export default App;
