import React from 'react'
import logo from '../images/logodva.png';
import OnePacijent from './OnePacijent';

function HomePacijent() {
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
<OnePacijent />
      <br/>

    </div>
  )
}

export default HomePacijent
