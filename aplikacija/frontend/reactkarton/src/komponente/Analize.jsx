import React from 'react'
import OneAnaliza from './OneAnaliza';
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';


function Analize() {
  return (
    <div>
      <NavBar/>
      <button className="dugmenazad">
            <IoArrowBackCircle />
        </button>
        <h1 className='centriraj'>ANALIZE</h1>
    <div className='kartica'>
        
         <button  className='dugme'>dodaj novu analizu</button>   
      <OneAnaliza />
      <br/>
      <OneAnaliza />
      <br/>
      <OneAnaliza />
      <br/>
    </div>
    </div>
  )
}

export default Analize
