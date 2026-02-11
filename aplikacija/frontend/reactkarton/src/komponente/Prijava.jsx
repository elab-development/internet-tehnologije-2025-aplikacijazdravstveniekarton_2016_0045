import React, { useState } from 'react';
import logo from '../images/logojedan.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Prijava() {
  const[userData,setUserData]=useState({
email: " ",
password: " ",


  });
  const navigate=useNavigate();
  function handleInput(e){


    console.log(e);
    let newUserData = userData;
    newUserData[e.target.name]=e.target.value;
    setUserData(newUserData);
  }
  function handleLogin(){




  }
  return (
    <div >
      <h1 className="centrirajtext">E-ZDRAVSTVENI KARTON </h1>
        <p className="centrirajtext"> PRIJAVA</p>
       
        <form onSubmit={handleLogin} className="prijava" >
           
               <label>E-MAIL:</label>
        <input type="text" name = "email" />
        <br/>
        
        <label>ŠIFRA:</label>
        <input type="text" name = "password" />
        <br/>
        
        
       <button  className='dugme' onClick={()=>navigate('/HomePacijent')}>prijavi se</button> 
        <br/>
        
      </form>
      <img src={logo} id="logo" className="slika"></img>
    </div>
  )
}

export default Prijava
