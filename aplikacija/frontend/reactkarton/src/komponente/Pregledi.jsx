import React from 'react'
import OnePregled from './OnePregled'
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar'

function Pregledi() {
  return (
    <div>
      <NavBar/>
         <button className='dugmenazad'> <IoArrowBackCircle />  </button>
            <h1 className='centriraj'>PREGLEDI</h1>
     <div className='kartica'>
      <button  className='dugme'>dodaj novi pregled</button>    
      <OnePregled />
      <OnePregled />
      <OnePregled />
    </div>
     </div>
  )
}

export default Pregledi
