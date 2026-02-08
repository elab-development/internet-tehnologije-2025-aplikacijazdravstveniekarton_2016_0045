import React from 'react'
import logo from '../images/logodva.png';
import OnePacijent from './OnePacijent';

function HomeMedOsoblje() {
  return (
    <div>
       <button type="submit" >Pregledi</button>
            <button type="submit" >Analize</button>
            <button type="submit" >Bolovanja</button>
            <button type="submit" >Uputi</button>
            <button type="submit" >Recepti</button>
            <button type="submit" >ODJAVI SE</button>
      
              <br/>
      
              <img src={logo} id="logo"></img>
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
