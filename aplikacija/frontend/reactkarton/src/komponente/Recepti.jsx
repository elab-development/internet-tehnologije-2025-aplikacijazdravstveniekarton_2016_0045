import React from 'react'
import OneRecept from './OneRecept'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';

function Recepti() {
 return (
    <div>
      <NavBar/>
      <button className="dugmenazad">
                  <IoArrowBackCircle />
              </button>
              <h1 className='centriraj'>RECEPTI</h1>
      <div className='kartica'>
              
                <button  className='dugme'>dodaj novi recept</button>  
      <OneRecept/>
      <OneRecept/>
    </div>
    </div>
  )
}

export default Recepti
