import React, { useState } from "react";

import memesData from "../memesData";
import MemeImage from "./MemeImage.js";
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };
  return (
    <main>
      <div className="form">
        <input
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          type="text"
          className="form--input"
          placeholder="Top text"
        />
        <input
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          type="text"
          className="form--input"
          placeholder="Bottom text"
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-section">
        <MemeImage
          topText={meme.topText}
          bottomText={meme.bottomText}
          imgSrc={meme.randomImage}
        />
      </div>
    </main>
  );
};

export default Meme;
