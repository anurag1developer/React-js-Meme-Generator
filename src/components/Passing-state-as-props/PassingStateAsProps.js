import React, { useState } from "react";

import Count from "./Count";

const PassingStateAsProps = () => {
  const [count, setCount] = useState(0);
  function upCount() {
    setCount((prevCount) => prevCount + 1);
  }
  const downCount = () => {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <Count number={count} />
      <button onClick={upCount}>up</button>
      <br />
      <button onClick={downCount}>down</button>
    </div>
  );
};

export default PassingStateAsProps;
