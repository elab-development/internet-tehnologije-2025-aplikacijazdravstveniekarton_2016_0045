import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';


function NavBar() {
  const userUloga= window.sessionStorage.getItem("uloga"); 


  function handleLogout(){
let config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
         Authorization: "Bearer " +  window.sessionStorage.getItem("auth_token"),
      },
    };

axios(config)
.then(function(response) {
      console.log(JSON.stringify(response.data));
      
        window.sessionStorage.removeItem("auth_token");
        
        navigate("/");
      
      })
      .catch((error) => {
        console.log(error);
      });


  }




  const navigate=useNavigate();


if(userUloga == "lekar"){
  return (
   <div >
      
<nav className='navbar'>
    <ul >
<li><a href ='/Home'>Pocetna stranica</a></li> 
  <li><a href ='/Pregledi'>Pregledi</a></li> 
      <li><a href ='/Analize'>Analize</a></li> 
      <li><a href ='/Uputi'>Uputi</a></li> 
       <li><a href ='/Bolovanja'>Bolovanja</a></li>
      <li><a href ='/Recepti'>Recepti</a></li> 
      
       
</ul>
<button  className='dugmeodjava' onClick={handleLogout}>odjavi se</button>
{/*<button  className='dugmeodjava' onClick={()=>navigate('/')}>odjavi se</button> */}
</nav>
 </div>
  )
}else if(userUloga == "pacijent"){

 return (
   <div >
      
<nav className='navbar'>
    <ul >
<li><a href ='/Home'>Pocetna stranica</a></li> 
  <li><a href ='/PreglediPacijent'>Pregledi</a></li> 
      <li><a href ='/AnalizePacijent'>Analize</a></li> 
      <li><a href ='/UputiPacijent'>Uputi</a></li> 
       <li><a href ='/BolovanjaPacijent'>Bolovanja</a></li>
      <li><a href ='/ReceptiPacijent'>Recepti</a></li> 
      
       
</ul>
<button  className='dugmeodjava' onClick={handleLogout}>odjavi se</button>
{/*<button  className='dugmeodjava' onClick={()=>navigate('/')}>odjavi se</button> */}
</nav>
 </div>
  )

}else if(userUloga == "sestra"){


 return (
   <div >
      
<nav className='navbar'>
    <ul >
<li><a href ='/Home'>Pocetna stranica</a></li> 
  <li><a href ='/PreglediSestre'>Pregledi</a></li> 
      <li><a href ='/AnalizeSestre'>Analize</a></li> 
      <li><a href ='/UputiSestre'>Uputi</a></li> 
       <li><a href ='/BolovanjaSestre'>Bolovanja</a></li>
      <li><a href ='/ReceptiSestre'>Recepti</a></li> 
      
       
</ul>
<button  className='dugmeodjava' onClick={handleLogout}>odjavi se</button>
{/*<button  className='dugmeodjava' onClick={()=>navigate('/')}>odjavi se</button> */}
</nav>
 </div>
  )


}






}

  
   

   




    

export default NavBar
