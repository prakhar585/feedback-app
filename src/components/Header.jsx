import React from "react";

function Header(props) {
  return (
    <header style={{ backgroundColor: "#202142", color: "pink" }}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

export default Header;
