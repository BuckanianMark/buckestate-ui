import "./register.scss";
import Banner from "../../assets/bn.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
function Register(){
    const [error,setError] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
      const formData = new FormData(e.target)
      const username =  formData.get("username") 
      const email =  formData.get("email") 
      const password =  formData.get("password") 
      setIsLoading(true)
      try {
        const res = await apiRequest.post("/auth/register",{
            username,email,password
          })
          console.log(res.data)
          navigate("/login")
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }finally{
        setIsLoading(false)
      }
     
    }
    return(
        <div className="register">
            <div className="left">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h1>Create An Account</h1>
                        <div className="formDiv">
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="formDiv">
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="formDiv">
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <button disabled={isLoading}>Sign Up</button>
                        
                        
                        <p>Already Have an account? <Link to={`/login`} className="link">Login</Link></p>
                        <span className="error">
                        {error && (<span>X {error}</span>)}
                        </span>
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

export default Register