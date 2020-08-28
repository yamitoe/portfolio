import React from "react";
export function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>{props.children}</ul>
    </nav>
  );
}
