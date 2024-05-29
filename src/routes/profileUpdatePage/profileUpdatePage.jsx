import { useContext, useState } from "react"
import "./profileUpdatePage.scss"
import { AuthContext } from "../../context/AuthContext"
import Avatar from "../../assets/avatar.png"
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom"
import UploadWidget from "../../components/uploadWidget/uploadWidget"
function ProfileUpdatePage(){
    const [error,setError] = useState("")
    const {currentUser,updateUser} = useContext(AuthContext);
    const [avatar,setAvatar] = useState([])
    const navigate = useNavigate();

    const handleSubmit =async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const {username,email,password} = Object.fromEntries(formData);  
      try {
        
        const res = await apiRequest.put(`/users/${currentUser.id}`,
        {username,email,password,avatar:avatar[0]})
        updateUser(res.data)
        navigate("/profile")
       
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }
    }
    return(
        <div className="profileUpdatePage">  
            <div className="formContainer">
                <div className="wrapper">
                <form onSubmit={handleSubmit}>
                <h1>Update Profile</h1>
                <div className="item">
                    <label htmlFor="username">UserName</label>
                    <input type="text" defaultValue={currentUser.username} name="username" id="username" />
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="text"  defaultValue={currentUser.email} name="email" id="email" />
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input type="text"  name="password" id="password" />
                </div>
                <button>Update</button>
                {error && <span className="error">{error}</span>}
            </form>
                </div>
          
            </div>
            <div className="sideContainer">
                <div className="wrapper">
                <img src={avatar[0] || currentUser.avatar || Avatar} alt="avatar" />
                <UploadWidget uwConfig={{
                    cloudName:"debgooad0",
                    uploadPreset:"buckestate",
                    multiple:false,
                    maxImageFileSize:2000000,
                    folder:"avatars"
                }} 
                setState={setAvatar} />
                </div>
                
            </div>
        </div>
    )
}
export default ProfileUpdatePage