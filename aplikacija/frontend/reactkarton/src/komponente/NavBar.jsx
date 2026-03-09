import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function NavBar() {


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
  return (
    <div >
      
<nav className='navbar'>
    <ul >
<li><a href ='/HomePacijent'>Pocetna stranica</a></li> 
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
}

export default NavBar
