import React from 'react'
import { useNavigate } from 'react-router-dom';



function NavBar() {
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

<button  className='dugmeodjava' onClick={()=>navigate('/')}>odjavi se</button> 
</nav>
  



        

      




    </div>
  )
}

export default NavBar
