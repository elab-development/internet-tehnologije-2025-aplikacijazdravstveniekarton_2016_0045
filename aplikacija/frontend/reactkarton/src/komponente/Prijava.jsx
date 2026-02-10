import React from 'react'
import logo from '../images/logojedan.png';


function Prijava() {
  return (
    <div >
      <h1 className="centrirajtext">E-ZDRAVSTVENI KARTON </h1>
        <p className="centrirajtext"> PRIJAVA</p>
       
        <form className="prijava" >
           
               <label>JMBG:</label>
        <input type="text" name = "JMBG" />
        <br/>
        
        <label>ŠIFRA:</label>
        <input type="text" name = "ŠIFRA" />
        <br/>
        
        
        <button type="submit" className='dugme'>PRIJAVI SE</button>
        <br/>
        
      </form>
      <img src={logo} id="logo" className="slika"></img>
    </div>
  )
}

export default Prijava
