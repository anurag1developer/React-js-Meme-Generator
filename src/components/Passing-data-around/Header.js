import React from "react";

const Header = (props) => {
  return (
    <header>
      <p>Current user: {props.user}</p>
    </header>
  );
};

export default Header;
