import React from 'react'
import OneAnaliza from './OneAnaliza';
import { IoArrowBackCircle } from 'react-icons/io5';


function Analize() {
  return (
    <div className='sveAnalize'>
        <button className="nazad">
            <IoArrowBackCircle />
        </button>
        <h1>ANALIZE</h1>
      <OneAnaliza />
      <br/>
      <OneAnaliza />
      <br/>
      <OneAnaliza />
      <br/>
    </div>
  )
}

export default Analize
