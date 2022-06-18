import react from "react";
import {useState} from "react";

export default function comment ({comment}){
    return (
        
        <div>
            <h1>{comment.user}</h1>
            <h4>{comment.comment}</h4>
        </div>
    )
}