// 7:28:46
import React, { useState } from "react";

function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  const togglePunchline = () => {
    // isShown ? setIsShown(false) : setIsShown(true);
    setIsShown((prevShown) => !prevShown);
  };
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <p>{isShown && props.punchline}</p>
      {/* {isShown ? (
        <button onClick={togglePunchline}>Hide Punchline</button>
      ) : (
        <button onClick={togglePunchline}>Show Punchline</button>
      )} */}
      <button onClick={togglePunchline}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
}

export default Joke;
