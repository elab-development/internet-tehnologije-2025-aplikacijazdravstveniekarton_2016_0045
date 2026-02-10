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

      <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form>        
      
     <OnePacijent />
      <br/> 
    </div>
  )
}

export default HomeMedOsoblje
