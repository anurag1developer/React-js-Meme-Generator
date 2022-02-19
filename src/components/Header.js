import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="header--image"
        src={require("../images/troll-face-1.png")}
        alt="troll-face"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React course - Project</h4>
    </header>
  );
}

export default Header;
