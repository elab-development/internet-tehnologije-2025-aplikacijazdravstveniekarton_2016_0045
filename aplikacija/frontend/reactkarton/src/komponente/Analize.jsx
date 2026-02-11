import React from 'react'
import OneAnaliza from './OneAnaliza';
import { IoArrowBackCircle } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';


function Analize() {
  const navigate=useNavigate();
  return (
    <div>
      <NavBar/>
      
        <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
      
        <h1 className='centriraj'>ANALIZE</h1>
    <div className='kartica'>
        
         <button  className='dugme' onClick={()=>navigate('/AddAnalize')}>dodaj novu analizu</button>   
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
