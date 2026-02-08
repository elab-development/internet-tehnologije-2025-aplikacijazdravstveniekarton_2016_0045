import React from 'react'
import logo from '../images/logojedan.png';


function Prijava() {
  return (
    <div>
      <h1>E-ZDRAVSTVENI KARTON</h1>
        <p> PRIJAVA</p>
       
        <form className="prijava" >
           
               <label>JMBG:</label>
        <input type="text" name = "JMBG" />
        <br/>
        
        <label>ŠIFRA:</label>
        <input type="text" name = "ŠIFRA" />
        <br/>
        
        
        <button type="submit" >PRIJAVI SE</button>
        <br/>
        
      </form>
      <img src={logo} id="logo"></img>
    </div>
  )
}

export default Prijava
