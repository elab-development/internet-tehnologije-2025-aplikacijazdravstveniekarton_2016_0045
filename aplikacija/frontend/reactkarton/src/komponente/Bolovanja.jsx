import React from 'react'
import OneBolovanje from './OneBolovanje'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';

function Bolovanja() {
  return (
    <div>
      <NavBar/>
      <button className="dugmenazad">
                  <IoArrowBackCircle />
              </button>
              <h1 className='centriraj'>BOLOVANJA</h1>
     <div className='kartica'>
      
              
              <button  className='dugme'>dodaj novo bolovanje</button>  
      <OneBolovanje />
       <OneBolovanje />
       <OneBolovanje />
    </div>
    </div>
  )
}

export default Bolovanja
