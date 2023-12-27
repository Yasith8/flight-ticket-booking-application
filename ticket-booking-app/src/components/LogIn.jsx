import React, { useState } from 'react'

import '../components/login.css';
import {useNavigate} from 'react-router-dom';

function LogIn() {

  const username="admin";
  const password = "admin";

  const navigate=useNavigate();

  const [validInput,setValidInput]=useState("");
  const [inputUsername,setInputUsername]=useState("");
  const [inputPassword,setInputPassword]=useState("");

  const loginHandler = (e)=>{
    e.preventDefault();

    if(inputUsername==username && inputPassword==password){
      navigate("/dashboard");
    }else{
      setValidInput("is-invalid");
      alert("Your Password or Username were invalid")
    }
    
  }
  
  
  const resetHandler=()=>{
    setValidInput("");
    
  }


  

  return (
    <div className='row log-main'>
        <div className="col-3"></div>
        <div className="col-6">
            <div className="row bg-white  log-cont">
                <div className="col-2"></div>
                <div className="col-8">
                    <h2 className='text-center'>LOGIN FORM</h2>
                   <form action="" method='post' className='mt-4'>

                   
                    {/* username input start */}
                    <div className="row  form-floating">
                    <input type='text' name='username' id='floatingInusernameput' className={`form-control ${validInput}`} placeholder='enter your username' onChange={(e)=>{setInputUsername(e.target.value)}}/><br/>
                    <label for="floatingInusernameput">Username</label>
                    </div>
                    {/* username input end */}

                 
                    {/* password input start */}
                    <div className="row form-floating mt-3">
                    <input type='text' name='password' id='floatingPword' className={`form-control ${validInput}`} placeholder='enter your password' onChange={(e)=>{setInputPassword(e.target.value)}}/><br/>
                    <label for="floatingPword">Password</label>
                    </div>
                    {/* password input end */}

                    <div className="row d-flex justify-content-between mt-4">

                    {/* reset button start */}
                    <div className="col-4 p-0">
                    <button type="reset" class="btn btn-outline-danger w-100" onClick={resetHandler}>RESET</button>
                    </div>
                    {/* reset button end */}
                    <div className="col-2"></div>
                    <div className="col-2"></div>

                    {/* submit button start */}
                    <div className="col-4 p-0">
                    <button type="submit" class="btn btn-success w-100" onClick={loginHandler}>LOGIN</button>
                    </div>
                    {/* submit button end */}

                    
                    </div>
                   </form>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        <div className="col-3"></div>
    </div>
  )
}

export default LogIn