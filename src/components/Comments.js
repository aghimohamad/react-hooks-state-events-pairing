import react from "react";
import {useState} from "react";
import Comment from "./Comment";

export default function comments ({comments}){
    return (<>
            {comments.map(comment => <Comment comment={comment}></Comment>)}
    </>
    )
}