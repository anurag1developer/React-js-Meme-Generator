const MemeImage = (props) => {
  return (
    <div className="meme">
      <img className="meme--image" src={props.imgSrc} />
      <h2 className="meme--text top">
        {props.topText || "One does not simply"}
      </h2>
      <h2 className="meme--text bottom">
        {props.bottomText || "Walk into Mordor"}
      </h2>
    </div>
  );
};

export default MemeImage;
