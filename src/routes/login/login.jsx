import "./login.scss";
import Banner from "../../assets/bn.png";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


function Login(){
    const [error,setError] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const {updateUser} = useContext(AuthContext)


    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
      const formData = new FormData(e.target)
      const username =  formData.get("username")
      const password =  formData.get("password") 
      try {
        setIsLoading(true)
        const res = await apiRequest.post("/auth/login",{
            username,password
          })
          updateUser(res.data)
          navigate("/")
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }finally{
        setIsLoading(false)
      }
     
    }
    return(
        <div className="login">
            <div className="left">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h1>Welcome Back,Login Below</h1>
                    <div className="formDiv">
                            <input type="text" required minLength={3} maxLength={50} name="username" placeholder="Username" />
                        </div>
                        <div className="formDiv">
                            <input type="password" required name="password" placeholder="Password"/>
                        </div>
                        <button disabled={isLoading}>Sign In</button>
                        <p>Don&apos;t Have an account? <Link to={`/register`} className="link">Register</Link></p>
                       
                        {error && (<span  className="error">X {error}</span>)}
                       
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <img src={Banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}
export default Login