import React, {useState} from 'react';
import "./App.scss";
import {NavBar} from './components/NavBar';
import {NavItem} from './components/NavItem';
import {DropDownMenu} from './components/DropDownMenu';

import {ReactComponent as Arrow} from './icons/arrow.svg';
import {ReactComponent as Plus} from './icons/plus.svg';
import {ReactComponent as Bolt} from './icons/bolt.svg';
import {ReactComponent as Bell} from './icons/bell.svg';
import {ReactComponent as Caret} from './icons/caret.svg';


function App() {
  return (
    <div className="App">
      <NavBar>
          <NavItem img={<Arrow/>}/>
          <NavItem img={<Plus/>}/>
          <NavItem img={<Bolt/>}/>
          <NavItem img={<Caret/>}>
            <DropDownMenu/>
          </NavItem>
      </NavBar>
    </div>
  );
}

export default App;
