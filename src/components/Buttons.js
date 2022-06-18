import react from "react";
import {useState} from "react";

export default function Buttons ({video, handleClick , hide}){
    const [likes, setLikes] = useState(video.upvotes);
    const [dislikes, setDislikes] = useState(video.downvotes);
    function handleLike(){
        setLikes(likes + 1);
    }
    function handleDislike(){
        setDislikes(dislikes + 1);
    }
    return (
        <>
         <div>
            <button onClick={handleLike} >{likes}👍</button>
            <button onClick={handleDislike} >{dislikes}👎</button>
        </div>
        <br></br>

        <div>
            <button onClick={handleClick}  >{hide ? "SHOW COMMENTS" : "HIDE COMMENTS"}</button>
        </div>
        </> 
    )
}