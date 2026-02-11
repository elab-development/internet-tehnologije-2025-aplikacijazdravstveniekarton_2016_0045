import React from 'react'
import OneUput from './OneUput'
import { IoArrowBackCircle } from 'react-icons/io5';
import { BiAlignLeft } from 'react-icons/bi';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function Uputi() {
  const navigate=useNavigate();
  return (
    <div>
      <NavBar/>
      <form action= "submit" >
        <label>Unesi JMBG pacijenta:</label>
        <input type="text" name = "Unesi JMBG pacijenta:" /> 
         
<button type="submit" >PRONAĐI</button>       
        
      </form> 
      <h1 className='centriraj'>UPUTI</h1>
              
     <div className='kartica'>
      
          <button  className='dugme' onClick={()=>navigate('/AddUput')}>dodaj nov uput</button>     
              
      <OneUput />
      <OneUput />
      <OneUput />
    </div>
    </div>
  )
}

export default Uputi
