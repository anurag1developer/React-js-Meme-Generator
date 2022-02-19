import React from "react";

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? "#222" : "transparent",
  };
  return (
    <div
      onClick={props.clickSwitch}
      // onClick={() => props.clickSwitch(props.id)}
      //   onClick={switchHandler}
      style={styles}
      className={props.className}
    ></div>
  );
};

export default Box;
