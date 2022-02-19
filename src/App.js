import React from "react";

import Header from "./components/Header";
import Meme from "./components/Meme";
// import Objects from "./components/Complex-state/Objects";
// import PassingStateAsProps from "./components/Passing-state-as-props/PassingStateAsProps";
// import Welcome from "./components/Passing-data-around/Welcome";
// import Boxes from "./components/Boxes-challenge/Boxes";
// import Jokes from "./components/Conditional-rendering/Jokes";
// import Form from "./components/Watch-for-input-changes-in-React/Form";
// import FormPractice from "./components/Submit-form-practice/FormPractice";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Meme />
      {/* <Objects /> */}
      {/* <PassingStateAsProps /> */}
      {/* <Welcome /> */}
      {/* <Boxes darkMode={true} /> */}
      {/* <Jokes /> */}
      {/* <Form /> */}
      {/* <FormPractice /> */}
    </React.Fragment>
  );
}

export default App;
