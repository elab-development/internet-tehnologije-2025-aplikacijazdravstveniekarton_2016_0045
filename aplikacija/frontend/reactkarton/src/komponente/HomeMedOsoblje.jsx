import React from 'react'
import logo from '../images/logojedan.png';
import OnePacijent from './OnePacijent';
import NavBar from './NavBar';

function HomeMedOsoblje() {
  return (
    <div >
       <NavBar/>
      
              <br/>
      
              <img src={logo} id="logo" className="slika"></img>
              <br/>

             
      
     <OnePacijent />
      <br/> 
    </div>
  )
}

export default HomeMedOsoblje
