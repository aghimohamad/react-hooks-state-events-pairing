import video from "../data/video.js";
import Buttons from "./Buttons"
import Comments from "./Comments"
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [hide, setHide] = useState(false);

  function handleClick() {
    setHide(!hide);
  }
    
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <h2>{video.views} | {video.createdAt}</h2>
      <Buttons handleClick={handleClick} hide={hide} video={video} ></Buttons>
      <hr></hr>
      {!hide && <Comments comments={video.comments}></Comments>}
    </div>
  );
}

export default App;
