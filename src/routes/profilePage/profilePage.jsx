import Chat from "../../components/chat/chat"
import List from "../../components/list/list"
import "./profilePage.scss"
function ProfilePage(){
    return(
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar
                            <img src="https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg" alt="avatar" />
                        </span>
                        <span>
                            UserName: <b>John Doe</b>
                            Email: <b>john@gmail.com</b>
                        </span>
                    </div>
                    <div className="title">
                        <h1>My Listings</h1>
                        <button>Create New Listing</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved Listings</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                        <Chat />
                </div>
            </div>
        </div>
    )
}
export default ProfilePage