import React, { useState } from 'react';
import logo from '../images/logojedan.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Prijava({addToken}) {


const userUloga= window.sessionStorage.getItem("uloga"); 

  const[userData,setUserData]=useState({
email: "",
password: "",


  });
  let navigate = useNavigate();
  
  function handleInput(e){


   
    let newUserData = userData;
    newUserData[e.target.name]=e.target.value;
    setUserData(newUserData);
   
  }
  function handleLogin(e){
    e.preventDefault(); 

axios.post("http://127.0.0.1:8000/api/login",userData).then((res)=>
{
console.log(res.data);
 if(res.data.success === true){
        window.sessionStorage.setItem("auth_token", res.data.access_token); 
        window.sessionStorage.setItem("id", res.data.user.id); 
        window.sessionStorage.setItem("uloga", res.data.user.uloga); 
        addToken( res.data.access_token);
        if(userUloga === "pacijent" || userUloga === "lekar" || userUloga === "sestra" ){
             navigate('/Home');
        }else if(userUloga === "admin"){
           navigate('/HomeAdmin');
        }
        
        
      }
}
)
.catch( (e) =>{
 console.log(e)
  
       alert("Pogresan unos,pokusajte ponovo!");
       
  }
)

  }
  return (
    <div >
      <h1 className="centrirajtext">E-ZDRAVSTVENI KARTON </h1>
        <p className="centrirajtext"> PRIJAVA</p>
       
        <form onSubmit={handleLogin} className="prijava" >
           
               <label>E-MAIL:</label>
        <input type="text" name = "email" placeholder="email" onInput={handleInput} />
        <br/>
        
        <label>ŠIFRA:</label>
        <input type="text" name = "password" placeholder="password" onInput={handleInput} />
        <br/>
        
      <button type="submit" className='dugme' >prijavi se</button>  
       {/*<button type="submit" className='dugme' onClick={()=>navigate('/HomePacijent')}>prijavi se</button> */}
            
        <br/>
        
      </form>
      <img src={logo} id="logo" className="slika"></img>
    </div>
  )
}

export default Prijava
