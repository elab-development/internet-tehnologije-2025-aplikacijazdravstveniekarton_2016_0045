import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div >
      
<nav className='navbar'>
    <ul >
<li><a href ='/Pregledi'>Pregledi</a></li> 
      <li><a href ='/Analize'>Analize</a></li> 
      <li><a href ='/Uputi'>Uputi</a></li> 
       <li><a href ='/Bolovanja'>Bolovanja</a></li>
      <li><a href ='/Recepti'>Recepti</a></li> 
       
</ul>

</nav>
  
<button > Odjavi se</button>


        

      




    </div>
  )
}

export default NavBar
