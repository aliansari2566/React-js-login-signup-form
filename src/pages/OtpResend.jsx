import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useEffect, useState } from 'react';
// import Animated from "./animatedBackup.css";

// import loginLogo from "./img/FSDGE/logo-login-left.png"
import {Routes, Route, useParams, useNavigate} from 'react-router-dom';
import { Form, InputGroup, Row, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkInputStyle={
    width : "50%"


};
const OtpVerification = () =>{
    
    const navigate = useNavigate();

    const navigateToLogin = () => {     
        navigate('/Login');
      };
   
      
      const [otp, setOtp] = useState("");
      const [uin, setUin] = useState("");
      const [error, setError] = useState("");
      const [validateUin , setValidateUin] = useState('');

      function validateForm (){
        setValidateUin("");
   
        if(uin=="")
        {
            return  setValidateUin("Please Enter Your Uin");
        }
        if(uin != ""){
          let idPattern=  /^[0-9]{5}[0-9]{7}[0-9]$/;
          if(!idPattern.test(uin))
         {
          return  setValidateUin("Enter valid Uin Number ")
         }
         else{
          setValidateUin("")
         }
      }
      
            return "Ok"; 
       }
      let handleSubmit = async (e) => {
        e.preventDefault();
       
        const result=validateForm();

        if(result=="Ok")
        {
        console.log("Inside handle Submit..");
        try {
    
            setError("");
     // let res = await fetch("https://sahulat.fsedge.com:8085/sahulat/otpResend", {
        let res = await fetch("http://191.1.17.170:8085/sahulat/otpResend", {
            method: "POST",
            body: JSON.stringify({
                Uin: uin,
                Otp: otp,             

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              credentials: 'include',
            withCredentials: true
          });
          let resJson = await res.json();
          if (res.status === 200) {
    
            
              setError(resJson.desc);
           
           
          } else {
            setError("Some error occured");
          }
        } catch (err) {
          console.log(err);
          setError("Server not responding");
        }}
      };



 return(
        <>
  
        <div className="animated-Login">
        
        <form className="sign-animated">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
       <div className="inner-form">
       
       <div className="signIn-logo" >
    
      

     

       </div>
      
       <div className="login-paragraph">
              <h4>Edge Sahulat Account</h4>
              <ul>
        
                <p>Sahulat Account is an opportunity for new individual resident Pakistani Customers, whether you are a student,housewife, novice investor or someone wanting to make an entry and invest in the stock exchange.</p>
                     
              </ul>

             <h6>Features:</h6>
             
              <ul>
                <li>
                <p> Simplified account opening process, open with CNIC only  </p>
                </li>
                <li>
                <p> No document required for source of income.</p>
                </li>
                <li>
                <p> Open an account with just PKR 5,000/-</p>
                </li>
                <li>
                <p> Maximum investment up to PKR 1,000,000</p>
                </li>
                
              </ul>
                    
             
           
             
            </div>
           

        <div className="signIn-content">

        {/* <img className="sahulat-logo" src={loginLogo} alt={"logo"} width="200px" height="250px"  />  */}
        <h4 className="SignIn-Heading">Otp Resend</h4>
        
      
         
            <input  type="text" onChange={(e) => setUin(e.target.value)} value={uin} className="input box-user-id" placeholder="Enter Your Uin" style={linkInputStyle} required/>
           
            <p className="validateStyle">{validateUin}</p>

          
   
           
            <button type="submit" className="signIn-btn"  onClick={handleSubmit}>Submit</button>
            <p className="validateStyle">{error}</p>
            
            <button type="button" className="btn-Reg signIn-btn" onClick={navigateToLogin}>Login</button> 

        

            

        </div>
       </div>
      
       </form> 
       
       </div>
        </>
     
    )
    }
    export default OtpVerification;