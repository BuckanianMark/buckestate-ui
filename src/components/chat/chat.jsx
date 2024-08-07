/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import Avatar from "../../assets/avatar.png"
import "./chat.scss"
import { AuthContext } from "../../context/AuthContext"
import apiRequest from "../../lib/apiRequest"
import {format} from "timeago.js"
import { SocketContext } from "../../context/SocketContext"
function Chat({chats}){
    const [chat,setChat] = useState(null)
    const {currentUser} = useContext(AuthContext)
    const {socket} = useContext(SocketContext)
    const handleOpenChat =async (id,reciever) => {
        try {
           const res = await apiRequest("/chats/"+id) 
           setChat({...res.data,reciever})
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const text = formData.get("text")
        if(!text) return;
        try {
            const res = await apiRequest.post("/messages/" + chat.id,{text});
            setChat((prev) => ({...prev,messages:[...prev.messages,res.data]}))
            e.taret.reset()
            socket.emit("sendMessage",{
                recieverId:chat.reciever.id,
                data:res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
   
    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                {chats.map((c) => (
                    <div 
                    className="message" 
                    key={c.id} 
                    style={{backgroundColo:c.seenBy.includes(currentUser.id) ? "white" : "#fecd514e"}}
                    onClick={() =>handleOpenChat(c.id,c.reciever)}>
                        <img src={c.reciever.avatar || Avatar} alt="" />
                        <span>{c.reciever.username}</span>
                        <p>{c.lastMessage}</p>
                    </div>
                ))}
            
               
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src={chat.reciever.avatar || Avatar} alt="avatar" />
                        {chat.reciver.username}
                    </div>
                    <span className="close" onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                   
                   {chat.messages.map((message) => (
                       <div
                        className="chatMessage"
                        key={message.id}
                        style={{
                            alignSelf:message.userId === currentUser.id ? "flex-end" : "flex-start",
                            textAlign:message.userId === currentUser.id ? "right" : "left",

                        }}>
                        <p>{message.text}</p>
                        <span>{format(message.createdAt)}</span>
                    </div> 
                    ))} 
                  
                </div>
                <form onSubmit={handleSubmit} className="bottom">
                    <textarea name="text"></textarea>
                    <button>Send &gt;</button>
                </form>
            </div>)}
        </div>
    )
}

export default Chat