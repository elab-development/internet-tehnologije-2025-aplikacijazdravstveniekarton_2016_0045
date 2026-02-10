import React from 'react'
import OneUput from './OneUput'
import { IoArrowBackCircle } from 'react-icons/io5';
import { BiAlignLeft } from 'react-icons/bi';
import NavBar from './NavBar';

function Uputi() {
  return (
    <div>
      <NavBar/>
      <button className='dugmenazad'> <IoArrowBackCircle />  </button>
      <h1 className='centriraj'>UPUTI</h1>
              
     <div className='kartica'>
      
          <button  className='dugme'>dodaj novi uput</button>    
              
      <OneUput />
      <OneUput />
      <OneUput />
    </div>
    </div>
  )
}

export default Uputi
