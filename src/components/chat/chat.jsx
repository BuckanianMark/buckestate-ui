import { useState } from "react"
import "./chat.scss"
function Chat(){
    const [chat,setChat] = useState(true)
    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit, amet consectetur </p>
                </div>
                <div className="message">
                    <img src="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit, amet consectetur </p>
                </div>
                <div className="message">
                    <img src="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit, amet consectetur </p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" alt="avatar" />
                        John Doe
                    </div>
                    <span className="close" onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <span>1 hour ago</span>
                    </div> 
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send &gt;</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat