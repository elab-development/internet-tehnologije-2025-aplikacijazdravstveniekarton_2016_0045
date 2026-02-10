import React from 'react'
import logo from '../images/logojedan.png';
import OnePacijent from './OnePacijent';
import NavBar from './NavBar';

function HomePacijent() {
  return (
    <div >
      <NavBar/>
      

        <br/>

        <img src={logo} id="logo" className='slikahome' ></img>
        
      <br/>
<OnePacijent />
      <br/>

    </div>
  )
}

export default HomePacijent
