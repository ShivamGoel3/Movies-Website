import React from 'react';
import './Signup.css';
import {useState} from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate} from "react-router-dom";
function Signup() {
  const usenavigate=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [age, setAge] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");

  const  handleemail = (event) => {
		setEmail(event.target.value);
	};
  const  handlename = (event) => {
		setName(event.target.value);
	};
  const  handlepassword = (event) => {
		setPassword(event.target.value);
	};
  const  handleconfirmpassword = (event) => {
		setConfirmpassword(event.target.value);
	};
  const  handleage = (event) => {
		setAge(event.target.value);
	};
  const  handlemobilenumber = (event) => {
		setMobilenumber(event.target.value);
	};
  const signup=(user)=>{
    return axios
    .post("https://movies-website-backend.onrender.com/signup",user)
    .then((response) =>response.data);
    
  };
  const  handlesubmit = (event) => {
    event.preventDefault();

		if(validate()){
      let inputobj={"email": email,
            "password": password,
          "age":age,
          "mobilenumber":mobilenumber,
          "name":name
          };
          signup(inputobj).then((resp)=>{
            
        //    console.log(resp);
            if(resp==="User already exists")
          {  toast.error("User already exists");
            // console.log("no");
          }
            else
       { 
            toast.success("User is registered successful");
       usenavigate('/');}

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
if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
{  toast.error("Invalid email");
      return false;}
if(name === "")
{toast.error("Name cant be null");
return false;}
if(age === "")
{toast.error("Age cant be null");
return false;}
 if( mobilenumber === "" )
{ toast.error("mobilenumber can't be null");
return false;}
if(mobilenumber.length !== 10)
{toast.error("mobile number should be of 10 digits");
return false;}
    if( password === "" )
    { toast.error("password can't be null");
    return false;}
    if(password.length <6 )
    {toast.error("password should be greater than 5 digits");
return false;}
   if( confirmpassword === "" )
    { toast.error("confirm password can't be null");
    return false;}
    if( confirmpassword !== password)
    { toast.error("confirm password not equal to password");
    return false;}

    return true;
  }
  return (
   
  
       
        <div className="signup">
            <h1>Signup page</h1>
            
    <form onSubmit={handlesubmit} >
      <div className='mainContainer'>
    <label htmlFor="email">Your email</label>
        <input type="text" onChange={handleemail} placeholder="Enter email" />
      
        <label htmlFor="name">Your name</label>
        <input type="text" onChange={handlename} placeholder="Enter name" />
     
        <label htmlFor="age">Your age</label>
        
         <input type="number" onChange={handleage} placeholder="Enter age"  />
         
         <label htmlFor="mobilenumber">Your Mobile Number</label>
         <input type="number" onChange={handlemobilenumber} placeholder="Enter mobile number"  />
        
         <label htmlFor="password">Your password</label>
   <input type="password" onChange={handlepassword} placeholder="Enter password"  />
        
   <label htmlFor="confirmpassword"> confirm password</label>
  <input type="password" onChange={handleconfirmpassword} placeholder="Enter confirm password"  />
         
         <button type="submit"  >Sign up</button>
         </div>
    </form>
   </div>

   

  );

}

export default Signup;