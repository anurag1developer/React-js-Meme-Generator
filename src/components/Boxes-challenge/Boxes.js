import React, { useState } from "react";

import boxes from "../../boxes";
import Box from "./Box";

const Boxes = (props) => {
  const [squares, setSquares] = useState(boxes);
  // const styles = {
  //   backgroundColor: props.darkMode ? "#222" : "#ccc",
  // };

  //   First way
  //   const switchHandler = (id) => {
  //     setSquares((prevSquares) => {
  //       return prevSquares.map((prevSquare) => {
  //         if (prevSquare.id === id) {
  //           prevSquare.on = !prevSquare.on;
  //         }
  //         return prevSquare;
  //       });
  //     });
  //   };

  // Second way
  // const switchHandler = (id) => {
  //   setSquares((prevSquares) => {
  //     const newSquares = [];
  //     for (let i = 0; i < prevSquares.length; i++) {
  //       const currentSquare = prevSquares[i];
  //       if (currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on,
  //         };
  //         newSquares.push(updatedSquare);
  //       } else {
  //         newSquares.push(currentSquare);
  //       }
  //     }
  //     return newSquares;
  //   });
  // };

  const switchHandler = (id) => {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        // return square.id === id ? { ...square, on: !square.on } : { ...square };
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElements = squares.map((square) => (
    <Box
      clickSwitch={() => switchHandler(square.id)}
      // id={square.id}
      on={square.on}
      className="box"
      key={square.id}
    />
    // <div style={styles} className="box" key={square.id}></div>
  ));

  //   console.log(squareElements);
  return <main>{squareElements}</main>;
};

export default Boxes;
