import React,{useState,useEffect} from 'react';
import "./Sidebarchat.css";
import { Avatar } from '@material-ui/core';
import db from "../firebase";
import {Link } from "react-router-dom";

function Sidebarchat({id,name,addNewChat}) {

  const [seed,setSeed] = useState("");
  const [messages,setMessages] = useState([]);
 
  const handleClick =  () => {
      const roomName = prompt("please enter the name for the chat");
     if(roomName)
     {
         //DB stuff
        db.collection("rooms").add({
            name: roomName
        });
     }
  }


  useEffect(() => {
      if(id) 
      {
      db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot(snapshot => ( setMessages(snapshot.docs.map(doc => doc.data()))))
      }
  },[id])


  useEffect(() => {

setSeed(Math.floor(Math.random() *5000));

  },[]);

    return !addNewChat? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
        </div>
        </div>
        </Link>
    ):
    <div className="sidebarChat" onClick={handleClick}>
        <h2>Add New Chat</h2>
    </div>
}

export default Sidebarchat
