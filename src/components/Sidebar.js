import React,{useState,useEffect} from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton"
import  DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Sidebarchat from "./Sidebarchat";
import db from "../firebase"
import {useStateValue} from "./StateProvider";


function Sidebar() {

     const [rooms,setRooms] = useState([]);
     const [{user},dispatch] = useStateValue();

     useEffect(() => {
        const unsubscribed = db.collection("rooms").onSnapshot(snapshot =>
            (
                setRooms(snapshot.docs.map(doc => 
                    (
                        {
                            id: doc.id,
                            data: doc.data()
                        }
                    )))
            )
            )

            return(() => {
                unsubscribed();
            })
     },[])



    return (
        <div className="sidebar">


          
          <div className="sidebar__header">
          <Avatar src={user?.photoURL} />
          
          <div className="sidebar__headerRight">
          <IconButton>
          <DonutLargeIcon />
          </IconButton>

          <IconButton>
             <ChatIcon />
             </IconButton>

             <IconButton>
             <MoreVertIcon />  
</IconButton>
          </div>
           </div>

           <div className="sidebar__search">
           
           <div className="sidebar__searchContainer">
           <SearchOutlined />
           <input placeholder="Search or start new chat" />
           </div> 
           </div>

           <div className="sidebar__chats">
           <Sidebarchat addNewChat />
           {
               rooms.map(room =>
               (
                   <Sidebarchat key={room.id} id ={room.id} name={room.data.name} />
               ))
           }

           
                   

           </div>
           
        </div>
    )
}

export default Sidebar

