import React from 'react';
import './Login.css';
import axios from 'axios';
import {useState} from "react";
import {toast} from 'react-toastify';
import {Link,  useNavigate} from "react-router-dom";
function Login() {
  const usenavigate=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  handleemail = (event) => {
		setEmail(event.target.value);
	};
  const  handlepassword = (event) => {
		setPassword(event.target.value);
	};
  const  handlesignup = (event) => {
	usenavigate("/signup");
	};
  
  const login=(user)=>{
    return axios
    .post("https://movies-website-backend.onrender.com/login",user)
    .then((response) =>response.data);
    
  };
  const  handlesubmit = (event) => {
    event.preventDefault();

		if(validate()){
      let inputobj={"email": email,
            "password": password};
            login(inputobj).then((resp)=>{
              console.log(resp);
              if(resp==="Invalid credentials")
              toast.error("Invalid credentials");
              else if(resp==="User Not Registered")
              toast.error("User Not Registered");
              else
         usenavigate('/home');
  
            }).catch((error)=>{
              console.log(error);
            })
            
            ;
    

    }
   
	};
  const validate=()=>{
    if(email === "")
    {toast.error("Email cant be null");
return false;}
     if( password === "" )
    { toast.error("password can't be null");
    return false;}

    if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
   { toast.error("Invalid email format");    
    return false;}
    return true;
  }
  return (
   
  
       
        <div className="login">
         <h1>   Login page</h1>
            
    <form onSubmit={handlesubmit} >
      <div className='mainContainer'>
        
        <label htmlFor="email">Your email</label>
        <input type="text" onChange={handleemail} placeholder="Enter email" />
        <label htmlFor="password">Your password</label>

         <input type="password" onChange={handlepassword} placeholder="Enter password"  />
         
         <div className="forgotpsd">
         <Link to ="/forget">Forget password</Link>
         </div>
         <div >
         <button type="submit" >Login</button>
         </div>
        
         <div className='register'>
           Doesn't have an account
            {/* </div>
            <div > */}
         <button onClick={handlesignup }>Sign Up </button> 
        </div>
        </div>
         </form>
        

        
   </div>

   

  );

}

export default Login;