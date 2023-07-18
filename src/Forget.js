import React from 'react';
import './Signup.css';
import axios from 'axios';
import {useState} from "react";
import {toast} from 'react-toastify';
import {Link,  useNavigate} from "react-router-dom";
function Forget() {
  const usenavigate=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const  handleemail = (event) => {
		setEmail(event.target.value);
	};
  const  handlepassword = (event) => {
		setPassword(event.target.value);
	};
    const  handleConfirmpassword = (event) => {
		setConfirmpassword(event.target.value);
	};

  const  handlesignup = (event) => {
	usenavigate("/signup");
	};
  const forget=(user)=>{
    return axios
    .post("https://movies-website-backend.onrender.com/forget",user)
    .then((response) =>response.data);
    
  };
  const  handlesubmit = (event) => {
    event.preventDefault();

		if(validate()){
      let inputobj={"email": email,
            "password": password};
            forget(inputobj).then((resp)=>{
              console.log(resp);
              if(resp==="Account not exist")
              toast.error("Account not exist");
              else
             { toast.success("Password Changed");
         usenavigate('/');
  }
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
    if( confirmpassword === "" )
    { toast.error("confirm password can't be null");
    return false;}
    if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
   { toast.error("Invalid email format");    
    return false;}
    return true;
  }
  return (
   
  
       
        <div className="login">
         <h1>   Forget Password</h1>
            
    <form onSubmit={handlesubmit} >
      <div className='mainContainer'>
        
        <label htmlFor="email">Your email</label>
        <input type="text" onChange={handleemail} placeholder="Enter email" />
        <label htmlFor="password">Your new password</label>
         <input type="password" onChange={handlepassword} placeholder="Enter password"  />
        
         <label htmlFor="confirmpassword">Your confirm password</label>
         <input type="password" onChange={handleConfirmpassword} placeholder="Enter confirm password"  />
         
        
         <div >
         <button type="submit" >Forget</button>
         </div>
        
        
        </div>
         </form>
        

        
   </div>

   

  );

}

export default Forget;