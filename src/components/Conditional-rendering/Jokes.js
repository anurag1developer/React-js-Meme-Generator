import React from "react";

import jokesData from "../../jokesData";
import Joke from "./Joke";

const Jokes = () => {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
};

export default Jokes;
